import ResumeItem from '../ResumeItem'
import * as C from './styles'
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from 'react-icons/fa'

interface ResumePropsType {
    income: string;
    expense: string;
    total: string;
}

const Resume = ({income, expense, total}: ResumePropsType) => {
    return (
        <>
            <C.Container>
                <ResumeItem title={'Entradas'} Icon={FaRegArrowAltCircleUp} value={income}/>
                <ResumeItem title={'Saídas'} Icon={FaRegArrowAltCircleDown} value={expense} />
                <ResumeItem title={'Total'} Icon={FaDollarSign} value={total}/>
            </C.Container>
        </>
    )
}

export default Resume