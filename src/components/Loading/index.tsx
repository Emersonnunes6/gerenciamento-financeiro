import { Audio } from 'react-loader-spinner'
import * as C from './styles'

const LoadingComponent = () => {
    return (
        <>
            <C.BackgroundLoading>
                <C.AnimationContainer>
                    <Audio
                        height="100"
                        width="100"
                        color="white"
                        ariaLabel="tail-spin-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </C.AnimationContainer>
            </C.BackgroundLoading>
        </>
    )
}

export default LoadingComponent