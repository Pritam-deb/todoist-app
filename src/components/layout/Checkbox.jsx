import {firebase} from '../../firebase'


const Checkbox = ({id}) => {
    const archieveTask = () => {
        firebase
            .firestore
            .collection('tasks')
            .doc(id)
            .update({
                archived: true, 
            })
    }
    return(
        <div className="checkbox-holder" data-testid="checkbox-action" onClick={() => archieveTask()}>
            <span className="checkbox"/>
        </div>
    )
}

export default Checkbox;