import React ,{useState}from  'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './modalNew.css'

function ModalComponent({details}) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} className='p-0 border-0'>
      <img className="d-block w-100 itemImg" src={details.images[0]}
          alt="Third slide"/>
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby={details.id}
      >
        <Modal.Header closeButton>
          <Modal.Title id={details.id}>
            {details.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div id="carousel-example-1" className="carousel slide p-0 m-0 " data-ride="carousel" data-interval="false">
     {/* <!--Indicators-->  */}
    <ol className="carousel-indicators">
      <li data-target="#carousel-example-1" data-slide-to="0" className="active"></li>
      <li data-target="#carousel-example-1" data-slide-to="1"></li>
      <li data-target="#carousel-example-1" data-slide-to="2"></li>
    </ol>
   {/* <!--/.Indicators--> */}
     {/* <!--Slides-->  */}
    <div className="carousel-inner" role="listbox">
      {/* <!--First slide-->  */}
      <div className="carousel-item active">
        <img className="d-block w-100 itemImgCarousel" src={details.images[0]}
          alt="First slide"/>
      </div>
      {/* <!--/First slide-->  */}
       {/* <!--Second slide-->  */}
      <div className="carousel-item">
        <img className="d-block w-100 itemImgCarousel" src={details.images[1]}
          alt="Second slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100 itemImgCarousel" src={details.images[2]}
          alt="third slide"/>
      </div>
       {/* <!--/Second slide--> */}
    </div>
     {/* <!--/.Slides-->  */}
    {/* <!--Controls-->  */}
    <a className="carousel-control-prev" href="#carousel-example-1" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carousel-example-1" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
     {/* <!--/.Controls-->  */}
  </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalComponent;
