# dronut-starter
In order to get ready to write productive code, complete the following steps during Sprint 0:

### Repository Setup
1. Create a new team and GitHub repository for your project using [GitHub classroom](https://classroom.github.com/g/PtX0YpR0).
Your associated *cmu email* should show up in a listing and you can link your GitHub account.
Subsequent members should choose to join an existing team using the same link.
You may want to name your repository something like `foobarbaz`, which
will end up as `dronuts-2019-foobarbaz`, aka your *$respository_name*.

We're ok with you keeping your project public, but you can make it private if you so desire. Don't
forget to add `.gitignore` and `License** files!

2. In addition, you should setup any tools needed for collaboration, issue
tracking and project managment; Slack, Jira, GitHub Issues, ZenHub, Trello,
whatever it is your team would like to use.

If you're new to Git and GitHub, we highly recommend reading and running through
these two links:

* [GitHub Learning Lab](https://lab.github.com/)
* [GitHub Guides](https://guides.github.com/)

### Github Actions
1. Enable github actions. To do this, [these steps can be followed](https://docs.github.com/en/actions/quickstart).

### Initialize NodeJS/NPM
1. If you haven't already, install NodeJS and NPM on your computer.

2. Initialize your repository for NPM by running `npm init`. This will generate a `package.json` file in your repository.

### Choose a Web Framework and Install It
Within the NodeJS runtime, there a many frameworks for creating
server applications. For the purposes of this assignment, there are two options you should consider:

* <b>Option 1: Express</b><br>
The [Express Framework](https://expressjs.com/) is a general-purpose web
development framework with widespread adoption.

* <b>Option 2: Loopback</b><br>
The [Loopback Framework](https://loopback.io/) is a purpose-built REST API framework, with a smaller user base.

As a deliverable of sprint 0, you will be asked to compare these frameworks. You
should familiarize yourself with both projects in order to justify your decision.
Once the decision is made, install it in your groups repository.

### QA/Helpful Tools
1. You should install a linter for your repository, to help manage code style.
We highly recommend [eslint](https://eslint.org/docs/user-guide/getting-started)
or [tslint](https://palantir.github.io/tslint/) if you decide to use typescript.

To go a little further, we can use [eslint-watch](https://www.npmjs.com/package/eslint-watch) to automatically lint
while we're programming:

   > Success Condition:
   > ```
   > $ npm run lint (## which is calling esw -w src test)
   > > ✓ Clean (10:12:27 AM)
   > ```

2. Because NodeJS projects have many dependencies, it is massively beneficial to
use a tool to detect dependency updates and alert you as to potential
vulnerabilities. Normally, we would recommend using a SaaS tool like
[GreenKeeper](https://greenkeeper.io/) or [requires.io](https://requires.io/).
However, if you're repository is private, these tools require payment. If
that's the case, you should install [npm-check](https://www.npmjs.com/package/npm-check).

   > Success Condition:
   > ```
   > $ npm-check
   > > ❤️  Your modules look amazing. Keep up the great work. ❤️
   > ```

3. You should setup a test framework within your application to help with later
test-driven development. We'd suggest [Jest](https://jestjs.io/) (especially for React
development). Another option is to go with the [Mocha](https://mochajs.org/)
framework along with [Chai](http://chaijs.com/). Once installed, write a
single test, which doesn't actually test anything (besides that your tests run).

    > Success Condition:
    > ```
    > $ npm run test
    > > PASS test/routes.test.js
    > > GET /
    > > ✓ should render properly (853ms)
    > > GET /list
    > > ✓ should render properly with valid parameters (48ms)
    > > ✓ should error without a valid parameter (29ms)
    > > GET /404
    > > ✓ should return 404 for non-existent URLs (61ms)
    > > ...
    > ```

4. Verify that the above tools and targets can be executed by Github Actions.

5. Document the above tools in your README. Also update this boilerplate once
it's no longer needed.

### Docker
1. Although Docker should already be configured (see `Dockerfile` and `docker-compose.yml`) as
necessary, you may need to install the Docker Daemon on your machine to properly
complete the assignment. Read the [get-started](https://www.docker.com/get-started) guide for downloading Docker
locally. If you're on a Linux OS, starting [here](https://docs.docker.com/machine/install-machine/) would be more helpful.
**MAKE sure you do not install docker via snap. Snap's version of docker is outdated**

### Deployment
1. You should have received an email about signing-up/accepting a assignment/lab
from Microsoft, related to the class and registering with azure. Let us know 
if you haven't. We recommend using the [Azure Cli](https://docs.microsoft.com/en-us/cli/azure/authenticate-azure-cli?view=azure-cli-latest) 
to access your account info.

2. Using your Azure credentials, follow [these instructions](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/docker-machine) to manually
setup a Virtual Machine suitable for running Docker **with the following considerations**:
  * Instead of `myvm` use your project team name as your Docker Machine name.
  * Use "Standard_A1_v2" as the plan name / VM size.
  * Before running docker-create (creating your VM), make sure to additionally
  add the flag/option **--azure-resource-group cmu-17-356** when running the command.
  * The full command you'll run should look something like this:
    ```shell
    docker-machine create -d azure \
    --azure-subscription-id $sub \
    --azure-ssh-user azureuser \
    --azure-open-port 80 \
    --azure-resource-group cmu-17-356 \
    --azure-size "Standard_A1_v2" \
    $repository_name
     ```
  * **stop before the step "run a container"**.
  * Copy the IP address of your VM and your *$repository_name* (i.e. project/machine-name) into your Github Actions `.yml`
  * If you've set that ENV var, Run `cp -r "$DOCKER_CERT_PATH" ./azure`to copy your deployment certificates
  into your repository. Otherwise, you can run `cp -r ~/.docker/machine/machines/$repository_name/* ./azure`

This should enable automatic deployment via Github Actions!
