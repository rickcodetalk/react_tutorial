import {connect} from 'react-redux'
import Main from '../components/Main'
import {addPerson} from '../actions/actions'

const mapStateToProps = (state) => {
    return {
        people: state
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        onAddPerson: (person) => {
            dispatch(addPerson(person))
        }
    }
}

const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)

export default MainContainer