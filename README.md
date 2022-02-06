# dronut-starter

## Run frontend app

From the `/frontend` directory:
```bash
npm start
```

## Run server

From the root directory:

```bash
npm start
```

## Run tests

From the root directory:

```bash
npm test
```

## Run linter

From the root directory:

```bash
npm run lint
```

2. Because NodeJS projects have many dependencies, it is massively beneficial to
use a tool to detect dependency updates and alert you as to potential
vulnerabilities. Normally, we would recommend using a SaaS tool like
[GreenKeeper](https://greenkeeper.io/) or [requires.io](https://requires.io/).
However, if you're repository is private, these tools require payment. If
that's the case, you should install [npm-check](https://www.npmjs.com/package/npm-check).

   > Success Condition:
   >
   > ```
   > $ npm-check
   > > ❤️  Your modules look amazing. Keep up the great work. ❤️
   > ```

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
