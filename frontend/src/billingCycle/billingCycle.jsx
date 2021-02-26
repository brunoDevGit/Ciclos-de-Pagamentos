import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/Tab/tabs'
import TabsHeader from '../common/Tab/tabsHeader'
import TabsContent from '../common/Tab/tabsContent'


class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader 
                title='Ciclos de Pagamentos'
                small='Cadastro'/>
                <Content>
                    
                    <Tabs>
                        <TabsHeader></TabsHeader>
                        <TabsContent></TabsContent>
                    </Tabs>
                    
                </Content>
            </div>
        )
    }
}

export default BillingCycle