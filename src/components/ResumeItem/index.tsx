import * as C from './styles'

interface ResumeItemProps {
    title: string;
    Icon: any;
    value: string;
}

const ResumeItem = ({ title, Icon, value }: ResumeItemProps) => {
    return (
        <>
            <C.Container>
                <C.Header>
                    <C.HeaderTitle>{title}</C.HeaderTitle>
                    <Icon />
                </C.Header>
                <C.Total>{value}</C.Total>
            </C.Container>
        </>
    )
}

export default ResumeItem