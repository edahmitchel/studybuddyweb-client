import { Box, Flex, Spacer, Text } from "@chakra-ui/react"

export const Navbar = () =>{
    return(
        <>
            <Flex w={"100vw"} p={"4"}>
                <Box>
                    <Text fontSize={"1.8rem"}>Buddy App</Text>
                </Box>
                <Spacer></Spacer>
            </Flex>
        </>
    )
}