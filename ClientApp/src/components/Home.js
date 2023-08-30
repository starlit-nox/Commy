import React, { Component } from 'react';
import { Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);

        this.state = {
            categories: [
                { name: 'Groceries', route: '/groceries' },
                { name: 'Clothes', route: '/clothes' },
                { name: 'Jewelry', route: '/jewelry' },
                { name: 'Electronics', route: '/electronics' },
                { name: 'Home Appliances', route: '/homeappliances' },
                { name: 'Automotive', route: '/automotives' }
            ],
            editModalOpen: false,
            editIndex: -1,
            editedCategoryName: '',
            editedRoute: ''
        };
    }

    handleDelete = (index) => {
        const newCategories = [...this.state.categories];
        newCategories.splice(index, 1);
        this.setState({ categories: newCategories });
    };

    handleEdit = (index) => {
        const { name, route } = this.state.categories[index];
        this.setState({ editModalOpen: true, editIndex: index, editedCategoryName: name, editedRoute: route });
    };

    handleSaveEdit = () => {
        const { editIndex, editedCategoryName, editedRoute } = this.state;
        const newCategories = [...this.state.categories];
        newCategories[editIndex].name = editedCategoryName;
        newCategories[editIndex].route = editedRoute; // Update the route
        this.setState({ categories: newCategories, editModalOpen: false, editIndex: -1, editedCategoryName: '', editedRoute: '' });
    };

    handleModalClose = () => {
        this.setState({ editModalOpen: false, editIndex: -1, editedCategoryName: '', editedRoute: '' });
    };

    render() {
        return (
            <div>
                <h1>Welcome to Commy E-Commerce!</h1>

                {/* Categories */}
                <div>
                    <Container>
                        {this.state.categories.map((category, index) => (
                            <Row className="justify-content-between mb-2" key={index}>
                                <Col sm={{ size: 'auto' }}>
                                    <Link to={category.route}>
                                        <Button color="warning">{category.name}</Button>
                                    </Link>
                                    <ButtonGroup>
                                        <Button color="danger" onClick={() => this.handleDelete(index)}>Delete</Button>
                                        <Button color="info" onClick={() => this.handleEdit(index)}>Edit</Button>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        ))}
                    </Container>
                </div>

                {/* Edit Modal */}
                <Modal isOpen={this.state.editModalOpen} toggle={this.handleModalClose}>
                    <ModalHeader>Edit Category</ModalHeader>
                    <ModalBody>
                        <Input
                            type="text"
                            value={this.state.editedCategoryName}
                            onChange={(e) => this.setState({ editedCategoryName: e.target.value })}
                        />
                        <Input
                            type="text"
                            value={this.state.editedRoute}
                            onChange={(e) => this.setState({ editedRoute: e.target.value })}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleSaveEdit}>Save</Button>
                        <Button color="secondary" onClick={this.handleModalClose}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
