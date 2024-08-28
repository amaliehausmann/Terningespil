import "./App.scss";
import Modal from'./components/modal/modal';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return
   <>
    <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2>Velkommen til TerningSpillet!</h2>
            <p>Dette er en popup modal. Klik på X for at lukke den.</p>
        </Modal>
   </>;
}

export default App;
