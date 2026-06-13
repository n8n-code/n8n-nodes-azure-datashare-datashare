import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureDatashareDatashare implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Datashare Datashare',
                name: 'N8nDevAzureDatashareDatashare',
                icon: { light: 'file:./azure-datashare-datashare.png', dark: 'file:./azure-datashare-datashare.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Creates a Microsoft.DataShare management client.',
                defaults: { name: 'Azure Datashare Datashare' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureDatashareDatashareApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
