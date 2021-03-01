import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/Tab/tabs'
import TabsHeader from '../common/Tab/tabsHeader'
import TabsContent from '../common/Tab/tabsContent'
import TabHeader from '../common/Tab/tabHeader'

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader
                    title='Ciclos de Pagamentos'
                    small='Cadastro' />
                <Content>

                    <Tabs>
                        <TabsHeader>

       <TabHeader label='Listar' icon='bars' target='tabList' />
       <TabHeader label='Incluir' icon='plus' target='tabCreate' />
       <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
       <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />

                        </TabsHeader>
                        <TabsContent></TabsContent>
                    </Tabs>

                </Content>
            </div>
        )
    }
}

export default BillingCycle