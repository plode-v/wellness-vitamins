import styled from "styled-components"
import { Facebook, Instagram, Twitter, } from "@mui/icons-material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;

`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
` 

const ContactItem = styled.div`
    
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LOGO.</Logo>
                <Desc>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alternation in some form, by injected humour, or randomised words which don't even slightly belivable.</Desc>
                <SocialContainer>
                    <SocialIcon color="#3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="#E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="#55ACEE">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Vitamins</ListItem>
                    <ListItem>Muscle Building</ListItem>
                    <ListItem>Men's Apparels</ListItem>
                    <ListItem>Women's Apparels</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    address
                </ContactItem>
                <ContactItem>
                    +1 234 5678
                </ContactItem>
                <ContactItem>
                    contact@wellness.com
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer;