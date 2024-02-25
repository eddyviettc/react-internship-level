import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { postCreateUser, putUpdateUser } from '../services/UserService'
import { toast } from 'react-toastify';


const ModalEditUser = (props) => {
    const { handleClose, show, dataUserEdit, handleEditUserFromModal } = props
    const [name, setName] = useState("")
    const [job, setJob] = useState("")

    const handleEditUser = async () => {
        let res = await putUpdateUser(name, job)
        if (res && res.updatedAt) {
            handleEditUserFromModal({
                first_name: name,
                id: dataUserEdit.id
            })
            handleClose()
            toast.success('Upadte user succeed')
        }


    }

    useEffect(() => {
        if (show) {
            setName(dataUserEdit.first_name)
        }

    }, [dataUserEdit])
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        <div>
                            <form>
                                <div class="mb-3">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                </div>
                                <div class="mb-3">
                                    <label className="form-label">Job</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        value={job}
                                        onChange={(event) => setJob(event.target.value)}

                                    />
                                </div>

                            </form>

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleEditUser()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}
export default ModalEditUser

