import { Text, Box, Flex, Spacer, Button, Image } from "@chakra-ui/react";
import yolo from "../assets/images/ellipse.png";
import yolo2 from "../assets/images/imagegirl.png";
import yolo3 from "../assets/images/pink.png";
import yolo4 from "../assets/images/orangeb.png";
import yolo5 from "../assets/images/oranges.png";
import yolo6 from "../assets/images/appface.png";
import yolo7 from '../assets/images/rectangle8.png';
const Hero = () =>{
    return(
        <>
            <Image position={'absolute'} top={'0'} zIndex={'hide'} src={yolo}></Image>
            <Image top={'50vh'} position={'absolute'} src={yolo3}></Image>
            <Image top={'65vh'} left={'40%'} position={'absolute'} src={yolo4}></Image>
            <Image left={'65%'} position={'absolute'} src={yolo5}></Image>
            <Box left={'71vw'} zIndex={'hide'} top={'-5vh'} position={'absolute'} width={'50vw'} borderRadius={'full'} bgColor={'blue'} height={'100vh'}></Box>
            <Flex align={'center'} width={'100vw'} height={'80vh'} px={'20'}>
                <Box width={'65%'}>
                    <Text fontWeight={'bold'} mb={'10px'} fontSize={"2.8rem"}>Study Buddy APP</Text>
                    <Text fontWeight={'medium'} font color={'gray.500'} fontSize={'1.4rem'}>
                    Lorem ipsum dolor sit amet consectetur. Iaculis arcu proin posuere sagittis auctor viverra. A enim suspendisse ac cras. Duis nibh sed velit leo interdum. Mi volutpat vitae augue justo vitae erat.
                    </Text>
                    <Button size={'lg'} mt={'3'} variant={'solid'} colorScheme="blue">
                        Get Started
                    </Button>
                </Box>
                <Spacer></Spacer>
                <Box>
                    <Image bgSize={'50px'} src={yolo2}></Image>
                </Box>
            </Flex>

        </>
    )
};



const Body = () =>{
    return(
        <Box width={'100vw'} mt={'200px'} px={'20'}>
            <Flex width={'100%'} align={'center'} direction={'column'}>
                <Image position={'relative'} left={'-40%'} top={'28'} src={yolo7}></Image>
                <Text fontWeight={'semibold'} fontSize={'4xl'}>How the app works</Text>
                <Flex width={'100%'} px={'20'} align={'center'} direction={'row'}>
                    <Box width={'50%'}>
                        <Image size={'150px'} src={yolo6}></Image>
                    </Box>
                    <Spacer></Spacer>
                    <Flex direction={'column'} pt={'50px'} width={'50%'}>
                        <Text color={'blue'} fontSize={'18px'} fontWeight={'semibold'}>Create an Account</Text>
                        <Text fontSize={'3rem'} lineHeight={'3rem'} fontWeight={'bold'}>Study with your <br></br> buddy</Text>

                        <Text mt={'3'} color={'gray.500'} fontSize={'1.5rem'} lineHeight={'2.3rem'} fontWeight={'medium'}>
                            There are more than 950 categories updated
                            daily based on trending websites reviews and
                            users rating.
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
} 

export const Home = () =>{
    return(
        <>
           <Box width={'100vw'} >
            <Hero></Hero>
            <Body></Body>
           </Box>
            
        </>
        
    )
}