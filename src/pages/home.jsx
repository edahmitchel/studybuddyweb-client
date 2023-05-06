import { Text, Box, Flex, Spacer, Button, Image } from "@chakra-ui/react";
import yolo from "../assets/images/ellipse.png";
import yolo2 from "../assets/images/imagegirl.png";
import yolo3 from "../assets/images/pink.png";
import yolo4 from "../assets/images/orangeb.png";
import yolo5 from "../assets/images/oranges.png";
import yolo6 from "../assets/images/appface.png";
import yolo7 from '../assets/images/rectangle8.png';
import yolo8 from "../assets/images/polygon1.png";
import yolo9 from "../assets/images/ell7.png";
import yolo10 from "../assets/images/phone.png";
import yolo11 from "../assets/images/ell8.png";
import yolo12 from "../assets/images/ell9.png";
import yolo13 from "../assets/images/ellm.png";
import yolo14 from "../assets/images/ellp.png";
import yolo15 from "../assets/images/pol2.png";
import yolo16 from "../assets/images/outerp.png";
import yolo17 from "../assets/images/saly.png";
import yolo18 from "../assets/images/saly1.png";
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
        <Box width={'100vw'} mt={'200px'} mb={'100px'} px={'20'}>
            <Flex width={'100%'} align={'center'} direction={'column'}>
                <Image position={'relative'} left={'-40%'} top={'28'} src={yolo7}></Image>
                <Image position={'relative'} left={'-50%'} top={'60'} src={yolo8}></Image>
                <Image position={'relative'} top={'50rem'} src={yolo9}></Image>
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
            <Image position={'relative'} left={'27rem'} top={'10rem'} src={yolo15}></Image>
            <Image src={yolo11} position={'relative'} left={'48rem'} top={'10rem'}></Image>
            <Image src={yolo13} position={'relative'} left={'30rem'} top={'28rem'}></Image>
            <Image src={yolo12} position={'relative'} left={'18rem'} top={'55rem'}></Image>
            <Flex align={'center'} bgColor={'#EDEEF6'} rounded={'xl'} p={'20'} mt={'200px'}>
                <Flex  width={'50%'} direction={'column'} >
                    <Text fontWeight={'bold'} lineHeight={'4rem'} fontSize={'3rem'}>Find the Perfect <br></br> Buddy Tracker</Text>
                    <Text mt={'3'} fontWeight={'medium'} color={'gray.500'} fontSize={'1.3rem'} lineHeight={'1.7rem'}>
                    Lorem ipsum dolor sit amet consectetur. Et volutpat nunc eget placerat posuere non ligula donec. Viverra amet suscipit dui ac pellentesque bibendum ut
                    </Text>
                </Flex>
                <Spacer></Spacer>
                <Box>
                    <Image src={yolo14}></Image>
                    <Image mt={'-35rem'} ml={'11rem'} width={'300px'} src={yolo10}></Image>
                </Box>
            </Flex>
            <Flex width={'100%'} align={'center'} direction={'row'} rounded={'xl'} p={'20'} mt={'200px'}>
                <Box width={'50%'}>
                    <Image width={'300px'} src={yolo16}></Image>
                </Box>
                <Spacer></Spacer>
                <Flex width={'50%'} direction={'column'} >
                    <Text color={'blue'} fontWeight={'semibold'} fontSize={'1.3rem'}>Original Platform</Text>
                    <Text mt={'10'} color={'gray.600'} fontWeight={'bold'} lineHeight={'2.8rem'} fontSize={'2.5rem'}>
                    Discover interesting reading materials from our library 
                    </Text>
                    <Text mt={'3'} color={'gray.500'} fontSize={'1.4rem'}>
                        Find the perfect collection of books
                        right at your finger tips.
                    </Text>
                </Flex>
            </Flex>
            <Flex bgColor={'#FAB8C4'} width={'100%'} align={'center'} direction={'row'} rounded={'xl'} p={'20'} mt={'200px'}>
                <Flex width={'50%'} height={'100%'} direction={'row'} align={'center'} >
                    <Flex direction={'column'} >
                        <Text fontSize={'2.5rem'} fontWeight={'semibold'} color={'blue'}>
                        Complete each task to earn rewards and lots more....
                        </Text>
                        <Button alignSelf={'center'} width={'10rem'} display={'block'} color={'white'} bgColor={'blue'} variant={'solid'}>
                            Log In
                        </Button>
                    </Flex>
                </Flex>
                <Box width={'50%'}>
                    <Image src={yolo17}></Image>
                </Box>
            </Flex>
            <Flex  width={'100%'} align={'center'} direction={'row'} rounded={'xl'} p={'20'} mt={'200px'}>
                <Text width={'50%'} fontSize={'2.5rem'} fontWeight={'semibold'}>
                    Hey! Follow us on Social Media so you don't miss any info
                </Text>
                <Spacer></Spacer>
                <Box width={'50%'}>
                    <Image src={yolo18}>

                    </Image>
                </Box>
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