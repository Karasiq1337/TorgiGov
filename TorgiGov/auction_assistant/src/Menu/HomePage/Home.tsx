import React from "react";
import Form from "react-bootstrap/Form";
import {
    Col,
    Container,
    Dropdown,
    DropdownMenu,
    FormGroup,
    Row,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export function Home() {
    const forms = ['Государственная (неразграниченная) собственность', 'Иная собственность', 'Собственность субъектов РФ']
    const type = ['Земли сельскохозяйственного назначения', 'Земли населенных пунктов']
    const count = 0;
    
    return(
        <Form>
            <Container>
                <Row>
                    <Col>
                        <h1 className={"text-center"}>Вы тут</h1>
                        <Form.Label сlassName={"text-center"}>Здесь вы можете просмотреть лоты</Form.Label>
                    </Col>
                </Row>
                <Row>
                    <Form.Label expand={"lg"} className={"text-center border border-primary bg-body-tertiary"}></Form.Label>
                </Row>
                {DropDownButton(forms, "Форма собственности")}
                {DropDownButton(type, "Тип земельного участка")}
                <FormGroup>
                    <Form.Check type={'radio'} label={`Аренда`} name="group1"/>
                    <Form.Check type={'radio'} label={`Продажа`} name="group1"/>
                </FormGroup>
                <Row>
                    <Form.Label expand={"lg"} className={"text-center border border-primary bg-body-tertiary"}></Form.Label>
                </Row>
                <Row>
                    <Col>
                        <Button>Найти</Button>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-end">
                    <Form.Label сlassName={"text-center"}>Найдено: {count} </Form.Label>
                </Row>
                <FormGroup>
                    <Row>
                        <Form.Label expand={"lg"} className={"text-center border border-primary bg-body-tertiary"}>АЛЕЕЕЕЕЕЕЕ</Form.Label>
                    </Row>
                    <Row>
                        <Form.Label expand={"lg"} className={"text-center border border-primary bg-body-tertiary"}>АЛЕЕЕЕЕЕЕЕ</Form.Label>
                    </Row>
                    <Row>
                        <Form.Label expand={"lg"} className={"text-center border border-primary bg-body-tertiary"}>АЛЕЕЕЕЕЕЕЕ</Form.Label>
                    </Row>
                </FormGroup>
        </Container>
        </Form>
    )
}

function DropDownButton(labels : string[], initialLabel : string){

    return(
    <Dropdown className={'mb-2'}>
        <Dropdown.Toggle className={"bg-light border-primary text-dark"} variant="success" id="dropdown-basic">
            {initialLabel}
        </Dropdown.Toggle>
        <DropdownMenu>
            {labels.map((l) => (
                <Form.Check
                    className={'ms-2 me-2'}
                    type={'checkbox'}
                    label={l}
                />))}
        </DropdownMenu>
    </Dropdown>
)
}


const renderCheckBoxes = ( labels : string[]) => {
    return (
        <>
            {labels.map((l) => (
            
                <Form.Check
                    className={'ms-2 me-2'}
                    type={'checkbox'}
                    label={l}
                />))}        
        </>
    )
}

