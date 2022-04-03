import * as C from './styles'
import {ReactNode} from 'react'
import {Header} from '../Header'
import {SidebarItem} from '../SidebarItem'
import {useForm} from '../../context/FormContext'

type Props = {
    children: ReactNode
}

export const Theme = ({children}: Props) => {
    const {state} = useForm()
    return (
        <C.Container>
            <C.Area>
                <Header/>
                <C.Steps>
                    <C.Sidebar>
                        <SidebarItem
                            title="Price"
                            description="Mention Package Price"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />
                        <SidebarItem
                            title="Experience"
                            description="Rate your experience"
                            icon="book"
                            path="/experience"
                            active={state.currentStep === 2}
                        />
                        <SidebarItem
                            title="Conclusion"
                            description="Final Calculated Tax"
                            icon="check"
                            path="/result"
                            active={state.currentStep === 3}
                        />
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}
