import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
  <Modal 
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleCloseModal}
    contentLabel="Selected Option"
    >
    <div> 
    {props.selectedOption && <p>{props.selectedOption}</p>} 
    <button onClick={props.handleCloseModal}>OK</button>
    </div>
  </Modal>
  )

export default OptionModal