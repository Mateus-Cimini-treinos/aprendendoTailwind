import React from 'react';


function App() {
  return (
    <>
 <main className='h-lvh w-lvw grid grid-cols-1  md:grid-cols-2 grid-rows-6'>

      <div className='row-span-5 md:flex  justify-end hidden'>
        <img className='max-w-96 ' src="/imgs/insta-img.png" alt="Inta-Mobile" />
      </div>

      <div className='row-span-5 flex flex-col justify-center items-center grid-cols-1'>
        <form className='w-80 flex flex-col justify-center items-center border rounded-sm p-10 py-4 gap-5'>
          <img className='w-52' src="/imgs/insta-logo-gray.png" alt="Insta-logo" />

          <input className='bg-slate-50 h-9 w-full pl-3 border rounded-sm' type="text" placeholder='Telefone, nome de usuario ou email' />
          <input className='bg-slate-50 h-9 w-full pl-3 border rounded-sm' type="text" placeholder='Senha' />

          <button className='bg-blue-400 w-full border rounded-md h-8 hover:bg-blue-300 text-slate-50'>Entar</button>

          <a className='text-blue-800 font-bold cursor-pointer' href="">Logar com o Facebook</a>
          <a  className='text-blue-800 text-sm cursor-pointer' href="">Esqueci a minha senha</a>
        </form>

        <div className='border w-80 my-4 text-center py-4'>
          <p>Nao tem conta? <a className='text-blue-400 font-bold' href=''>Cadastrar-se</a> </p>
        </div>

          Baixar o aplicativo
        
        <div className='flex gap-2 mt-4'>
          <img className='h-10' src="/imgs/appleappstoredowload.png" alt="Baixe-na-appStore" />
          <img className='h-10' src="/imgs/googleplaystoredowload.png" alt="Baixe-na-PlayStore" />
        </div>
      </div>
   
      <br  className='flex justify-end'/>

      <footer className='row-span-1 col-span-2'>
        <ul className='flex flex-wrap gap-5 justify-center'>
            <li className='text-slate-800 text-sm'>Meta</li>
            <li className='text-slate-800 text-sm'>Sobre</li>
            <li className='text-slate-800 text-sm'>Blog</li>
            <li className='text-slate-800 text-sm'>Carreiras</li>
            <li className='text-slate-800 text-sm'>Ajuda</li>
            <li className='text-slate-800 text-sm'>API</li>
            <li className='text-slate-800 text-sm'>Privacidade</li>
            <li className='text-slate-800 text-sm'>Termos</li>
            <li className='text-slate-800 text-sm'>Localizações</li>
            <li className='text-slate-800 text-sm'>Instagram Lite</li>
            <li className='text-slate-800 text-sm'>Threads</li>
            <li className='text-slate-800 text-sm'>Carregamento de contatos e não usuários</li>
            <li className='text-slate-800 text-sm'>Meta Verified</li>
        </ul>

        <ul className='flex flex-wrap gap-5 justify-center mt-6'>
            <li className='text-slate-800'>Português(Brasil)</li> 
            <li className='text-slate-800'>© 2024 Instagram from Meta</li>
        </ul>
      </footer>
    </main>
   
</>
   
  );
}

export default App
