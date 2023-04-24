// import { RiCloseLine } from "react-icons/all-files/ri"
import "../style.css"
import { Flex, Input } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
export const Modal = ({setIsOpen}) =>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues:{
            email:"",
            submit:"Get otp"
        }
      });
      const submit = watch("submit")
      const onSubmit = ((data) => {
        alert(JSON.stringify(data))
        // document.querySelector("#Modalbutton").innerHTML = "Submit otp";
        document.querySelector("#otp").disabled = false;
        function generateP (){
            let generatedPassword = "";

            let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789"
            let i;
            for (i = 1; i <= 6 ; i++){
                let word = Math.floor(Math.random() * char.length + 1)

                generatedPassword += char.charAt(word)
            }

            return generatedPassword
        }   
        alert(generateP())
      })
    return(
        <div className="Modal">
            <div >
                <h3 id="forP">Forgotten Password</h3>
                <button id="x" onClick={() => setIsOpen(false)}>
                    X
                {/* <RiCloseLine style={{ marginBottom: "-3px" }} /> */}
                </button>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex>
                        <label>Email</label>
                    </Flex>
                    <Input id="ModalEmail" required className="ModalInput" type={"email"} {...register("email")}/>
                    <Flex>
                        <label>Otp</label>
                    </Flex>
                    <Input disabled id="otp" required className="ModalInput" type={"text"} {...register("otp")}/>
                    <Input type="submit"  className="ModalInput" value="Submit otp" id="Modalbutton" {...register("submit")} />
                </form>
            </div>
        </div>
    )
}