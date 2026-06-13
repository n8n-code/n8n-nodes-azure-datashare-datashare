import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureDatashareDatashareApi implements ICredentialType {
        name = 'N8nDevAzureDatashareDatashareApi';

        displayName = 'Azure Datashare Datashare API';

        icon: Icon = { light: 'file:../nodes/AzureDatashareDatashare/azure-datashare-datashare.png', dark: 'file:../nodes/AzureDatashareDatashare/azure-datashare-datashare.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Datashare Datashare API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
