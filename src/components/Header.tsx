import logo from "../assets/logo-cm.png";

export default function Header() {
    return(
        <header className="py-3 bg-gradient-to-br from-[#038C7F] to-[#03A678] rounded-bl-[20px] rounded-br-[20px]">
            <img src={logo} alt="Logo Conta Médica" className="h-20 m-auto"/>
        </header>
    )
}