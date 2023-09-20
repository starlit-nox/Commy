import React, { Component } from 'react';
import { Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Home extends Component {
    constructor(props) {
        super(props);

        const storedCatagories = localStorage.getItem('catagories');
        const initialCatagories = storedCatagories
            ? JSON.parse(storedCatagories)
            : [
                { name: 'Groceries', route: '/groceries' },
                { name: 'Clothes', route: '/clothes' },
                { name: 'Jewelry', route: '/jewelry' },
                { name: 'Electronics', route: '/electronics' },
                { name: 'Home Appliances', route: '/homeappliances' },
                { name: 'Automotive', route: '/automotives' }
            ];

        this.state = {
            catagories: initialCatagories,
            editModalOpen: false,
            editIndex: -1,
            editedCategoryName: '',
            editedRoute: ''
        };
    }

    handleAddCatagory = () => {
        const newCategoryName = window.prompt('Enter the new category name:');
        const newRoute = window.prompt('Enter the route for the new category:');

        if (newCategoryName && newRoute) {
            const newCatagory = { name: newCategoryName, route: newRoute };
            // Add new catagory to the state
            this.setState(prevState => ({
                catagories: [...prevState.catagories, newCatagory]
            }));
        }
    };

    handleDelete = index => {
        const { catagories } = this.state;
        const newCatagories = [...catagories];
        newCatagories.splice(index, 1);
        // Update state to reflect deletion
        this.setState({ catagories: newCatagories });
    };

    handleEdit = index => {
        const { name, route } = this.state.catagories[index];
        this.setState({
            editModalOpen: true,
            editIndex: index,
            editedCategoryName: name,
            editedRoute: route
        });
    };

    handleSaveEdit = () => {
        const { editIndex, editedCategoryName, editedRoute } = this.state;
        const newCatagory = { name: editedCategoryName, route: editedRoute };
        const newCatagories = [...this.state.catagories];

        if (editIndex === -1) {
            // Add new catagory
            newCatagories.push(newCatagory);
        } else {
            // Edit existing catagory
            newCatagories[editIndex] = newCatagory;
        }

        // Update state and close modal
        this.setState({
            catagories: newCatagories,
            editModalOpen: false,
            editIndex: -1,
            editedCategoryName: '',
            editedRoute: ''
        });
    };

    handleModalClose = () => {
        this.setState({
            editModalOpen: false,
            editIndex: -1,
            editedCategoryName: '',
            editedRoute: ''
        });
    };

    componentDidUpdate() {
        localStorage.setItem('catagories', JSON.stringify(this.state.catagories));
    }

    render() {
        return (
            <div>
                <h1>Welcome to Commy E-Commerce!</h1>
                <Button color="success" onClick={this.handleAddCatagory}>
                    Add Catagory
                </Button>
                <div>
                    <Container>
                        {this.state.catagories.map((catagory, index) => (
                            <Row className="justify-content-between mb-2" key={index}>
                                <Col sm={{ size: 'auto' }}>
                                    <Link to={catagory.route}>
                                        <Button color="warning">{catagory.name}</Button>
                                    </Link>
                                    <ButtonGroup>
                                        <Button color="danger" onClick={() => this.handleDelete(index)}>
                                            Delete
                                        </Button>
                                        <Button color="info" onClick={() => this.handleEdit(index)}>
                                            Edit
                                        </Button>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        ))}
                    </Container>
                </div>
                <Modal isOpen={this.state.editModalOpen} toggle={this.handleModalClose}>
                    <ModalHeader>Edit Catagory</ModalHeader>
                    <ModalBody>
                        <Input
                            type="text"
                            value={this.state.editedCategoryName}
                            onChange={e => this.setState({ editedCategoryName: e.target.value })}
                        />
                        <Input
                            type="text"
                            value={this.state.editedRoute}
                            onChange={e => this.setState({ editedRoute: e.target.value })}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleSaveEdit}>
                            Save
                        </Button>
                        <Button color="secondary" onClick={this.handleModalClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Home;
