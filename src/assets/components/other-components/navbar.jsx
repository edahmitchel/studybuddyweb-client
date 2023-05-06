import { Box, Button, Flex, Spacer, Text, Stack} from "@chakra-ui/react"

export const Navbar = () =>{
    return(
        <>
            <Flex w={"100vw"} fontWeight={"medium"} p={"4"} px={'20'}>
                <Box mr={"50%"}>
                    <Text fontSize={"1.8rem"}>Buddy App</Text>
                </Box>
               
                <Flex w={'auto'}>
                    <Box mx={'6px'}>
                        <Text fontSize={"1.6rem"}>Home</Text>
                    </Box>
                    <Spacer></Spacer>
                    <Box mx={'6px'}>
                        <Text fontSize={"1.6rem"}>Team</Text>
                    </Box>
                    <Spacer></Spacer>
                    <Box mx={'6px'}>
                        <Text fontSize={"1.6rem"}>FAQ</Text>
                    </Box>
                    <Spacer></Spacer>
                    <Box mx={'6px'}>
                        <Text fontSize={"1.6rem"}>
                            Contact
                        </Text>
                    </Box>
                   
                </Flex>
                <Spacer></Spacer>
                <Stack colorScheme="teal" color={"blue"} direction="row" spacing="4" align='center'>
                            <Button mx={'6px'}>
                                Sign Up
                            </Button>
                    </Stack>
            </Flex>
        </>
    )
}