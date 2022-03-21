import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

async function submitOrder() {
  render(<App/>);

  // Log in as a user.
  const login = screen.getByRole('link', { name : /login/i });
  expect(login).toBeInTheDocument();
  expect(login).toBeEnabled();
  user.click(login);

  const username = await screen.findByPlaceholderText(/username/i);
  const password = screen.getByPlaceholderText(/password/i);

  user.type(username, "test");
  user.type(password, "test");

  const submitButton = screen.getByText(/submit/i);
  user.click(submitButton);

  await screen.findByText(/success/i);
  expect(screen.getByText(/success/i)).toBeInTheDocument();

  // Navigate to menu.
  const menu = screen.getByText(/donut menu/i);
  expect(menu).toBeInTheDocument();
  user.click(menu);

  // Order two of the first donut and one of the second.
  const buttons = await screen.findAllByRole('button', { name: /\+/i });
  const quantities = screen.getAllByLabelText(/quantity input/i);

  // Map donut i to how many of i are being purchased
  const quantityMap =
    { 0 : 2,
      1 : 1,
      2 : 0
    };

  for (var i in quantityMap) {
    expect(quantities[i]).toHaveValue("0");
    for (let j = 0; j < quantityMap[i]; j++) {
      expect(quantities[i]).toHaveValue(j.toString());
      user.click(buttons[i]);
    }
  }

  // Navigate to checkout.
  const checkout = screen.getByText(/checkout/i);
  expect(checkout).toBeInTheDocument();
  user.click(checkout);

  // Put in order info.
  const fullName = await screen.findByPlaceholderText(/full name/i);
  const phone = screen.getByPlaceholderText(/phone number/i);
  const street = screen.getByPlaceholderText(/street address/i);
  const city = screen.getByPlaceholderText(/city/i);
  const zip = screen.getByPlaceholderText(/zip code/i);

  user.type(fullName, "name");
  user.type(phone, "412");
  user.type(street, "name");
  user.type(city, "pgh");
  user.type(zip, "15213");

  // Make sure ordered donuts are in cart.
  const cartQuantities = screen.getAllByLabelText(/quantity input/i);
  for (let i in quantityMap) {
    if (quantityMap[i] != 0)
      expect(cartQuantities[i]).toHaveValue(quantityMap[i].toString());
  }

  const submitOrder = screen.getByText(/submit/i);
  user.click(submitOrder);
}

test("Can login as user and order", async () => {
  await submitOrder();
});

test("Can login as employee and order", async () => {
  // Submit an order as the user to populate the backlog.
  await submitOrder();

  // Log in as a employee.
  const login = screen.getByRole('link', { name : /login/i });
  expect(login).toBeInTheDocument();
  expect(login).toBeEnabled();
  user.click(login);

  const username = await screen.findByPlaceholderText(/username/i);
  const password = screen.getByPlaceholderText(/password/i);

  user.type(username, "admin");
  user.type(password, "test");

  const submitButton = screen.getByText(/submit/i);
  user.click(submitButton);

  await screen.findByText(/success/i);

  // Open backlog and send to drone.
  const backlog = screen.getByText(/backlog/i);
  user.click(backlog);
  const order = await screen.findByText(/order 0/i);
  user.click(order);
  const send = screen.getByText(/send to drone/i);
  user.click(send);

  // Order should be removed.
  expect(order).not.toBeInTheDocument();

});
