import React from 'react'
import './EditProfile.css'

export default function EditProfile() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div id="edit-profile">
            <h2>
                Edite seus dados
            </h2>
            <p className='subtitle'>Adicione uma imagem de Perfil e conte mais sobre você</p>
            {/* Preview da imagem */}
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="file" />
                </label>
                <input type="text" placeholder="Nome" className="bg-[#08B5CE] mb-3 mt-2 w-96 h-12 font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" />
                <input type="email" placeholder="Email" disabled className="bg-[#08B5CE] mb-3 mt-2 w-96 h-12 font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" />
                <label>
                    <input type="text" placeholder="Descrição do Perfil" className="bg-[#08B5CE] mb-3 mt-2 w-96 h-12 font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" />
                </label>
                <label>
                    <input type="password" placeholder='Digite sua nova senha' className="bg-[#08B5CE] mb-3 mt-2 w-96 h-12 font-bold p-2 text-white placeholder-[#AFD9FF] rounded-[10px]" />
                </label>
                <div>
                    <input type="submit" value="Atualizar" />
                </div>
            </form>
        </div>
    )
}
