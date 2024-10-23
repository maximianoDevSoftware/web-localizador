import { ProvedorAutenticacao } from "@/contexts/contextoUsuario";
import { EntregasClientesProvedor } from "@/contexts/entregasClientesContext";
import Image from "next/image";
import { SideBar } from "./sideBar/sideBar";
import dynamic from "next/dynamic";
import ClientesEntregas from "./telasFull/clientesEntrega";
import NovoClienteEntregas from "./telasFull/novoClienteEntrega";
import { TelaFullRelatEntregas } from "./Relatorio Entregas/telaRelEntregas";
import TelaMarcadorInform from "./informsMarcador/informsMarcador";
import MotoristasLogin from "./usuariosLogados/motoristaLogin";

const Mapa = dynamic(() => import("./mapa/meuMapa"), { ssr: false });

export default function Home() {
  return (
    <div className="corpoProjeto">
      <ProvedorAutenticacao>
        <EntregasClientesProvedor>
          <Mapa>
            <SideBar></SideBar>
            <ClientesEntregas />
            <NovoClienteEntregas />
            <TelaFullRelatEntregas />
            <TelaMarcadorInform />
            <MotoristasLogin />
          </Mapa>
        </EntregasClientesProvedor>
      </ProvedorAutenticacao>
    </div>
  );
}
