import {LotProps, PropertyType, TorgiType} from "./Torgi.types";
import React, {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../AppHooks";
import {addLot, delLot} from "./TorgiReducer";
import Form from "react-bootstrap/Form";
import {Col, FormGroup, FormLabel, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {addFavorites, delFavorites} from "../../Api/Favorites";
import {Link} from "@radix-ui/themes";
import {incrementRequest} from "../../Api/Stats";

export function CreateTitle(props : LotProps) : string{
    const type = props.Type == TorgiType.Rent ? "Аренда" : "Продажа";
    const propertyType = props.PropertyType == PropertyType.AgriculturalLand ? "сельскохозяйственного назначения"
        : "населённых пунктов";
    const address = props.Address != null ? `по адресу ${props.Address}` : '';

    return `${type} земель ${propertyType} ${address}`

}

export const Lot : FC<{props : LotProps}> = ( {props} )  =>{
    const userState = useAppSelector((state) => state.reducer.auth)
    const inFavorites = useAppSelector((state) => {
        if(props.Id){
            return !!state.reducer.torgi.lots.find(lot => lot.Id === props.Id);
        }
        return false;
    })
    const dispatch = useAppDispatch();

    async function favoriteButtonClick() {
        if(inFavorites){
            dispatch(delLot(props));
            if(userState.isLogged && props.Id){
                await delFavorites(userState.login, props.Id);
            }
        }
        else {
            if(userState.isLogged && props.Id){
                await addFavorites(userState.login, props.Id);
                await incrementRequest(props.Id);
            }
            dispatch(addLot(props));
        }
    }

    return(
        <Form className={"text-center border border-primary bg-body-tertiary mb-3"}>
            <Row>
                <Col>
                    <FormGroup className={'text-start ms-5 mt-3'}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                            <h4>{CreateTitle(props)}</h4>
                        </Form.Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className={'text-start mt-4'}>
                        <Form.Label expand={"lg"}
                                    className={"bg-body-tertiary d-flex justify-content-end me-5 text-primary"}>
                            <h3>{`Начальная цена: ${props.StartCost} руб.`}</h3>
                        </Form.Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup className={'text-start ms-5 mt-3 mb-3'}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                            Площадь: {props.Area}  M<sup>2</sup>
                        </Form.Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className={'text-start  mb-3'}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary d-flex justify-content-end me-5 text-info"}>
                            <Link>{props.Link}</Link>
                        </Form.Label>
                        <FormLabel className={'d-flex justify-content-end me-3'}>
                            <Button onClick={() => favoriteButtonClick()}
                            >{ (!inFavorites) ? "Добавить в избранное" : "Убрать из избранного"}</Button>
                        </FormLabel>
                    </FormGroup>
                </Col>
            </Row>
        </Form>

    )
}

export const LotList : FC<{props : LotProps[]}> = ({props}) => (
    <>
        {(props) && props.map(prop => <Lot props={prop}/>)}
    </>
)