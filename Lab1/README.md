# LAB 1

This project contains an Azure Resource Manager (ARM) template (template.json) that deploys the following resources:

1. Azure Storage Account
2. Azure App Service Plan
3. Node.js Web App

These resources are deployed to Azure using the ARM template, which allows for infrastructure as code.

## Deployment Instructions

To deploy the ARM template, you can use the provided deploy.bat script. This script will handle the deployment using the Azure CLI.

### Prerequisites

You need to have the Azure CLI installed.

Ensure you are logged in to your Azure account using ```az login```.

### Usage

Run the deploy.bat script to deploy the resources:

```./deploy.bat```

The script will deploy the Storage Account, App Service Plan, and Web App defined in the ARM template.

