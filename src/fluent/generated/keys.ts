import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '93dbed92602549ceb70fff26799412a1'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'e0aee709327e4e4993625533486b14f5'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '0a9e86476d91497b9c167e01004be17a'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'ed14980c340b413f93f652363c724715'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: 'cff37b30bede451bb00ddb3c22ba19bc'
                    }
                }
            }
        }
    }
}
