/* eslint-disable */
export const printANSI = () => {
  console.clear()
  // ASCII - ANSI Shadow
  let text = `

  ██████╗ ███████╗███████╗██╗ ██████╗ ███╗   ██╗███████╗██████╗     ██████╗ ██╗   ██╗    ██████╗    ██╗   ██████╗ 
  ██╔══██╗██╔════╝██╔════╝██║██╔════╝ ████╗  ██║██╔════╝██╔══██╗    ██╔══██╗╚██╗ ██╔╝    ██╔══██╗   ██║   ██╔══██╗
  ██║  ██║█████╗  ███████╗██║██║  ███╗██╔██╗ ██║█████╗  ██║  ██║    ██████╔╝ ╚████╔╝     ██████╔╝████████╗██████╔╝
  ██║  ██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║██╔══╝  ██║  ██║    ██╔══██╗  ╚██╔╝      ██╔═══╝ ██╔═██╔═╝██╔═══╝ 
  ██████╔╝███████╗███████║██║╚██████╔╝██║ ╚████║███████╗██████╔╝    ██████╔╝   ██║       ██║     ██████║  ██║     
  ╚═════╝ ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═════╝     ╚═════╝    ╚═╝       ╚═╝     ╚═════╝  ╚═╝     
                                                                                                                  
   `
  console.log(`%c${text}`, 'color: #fc4d50')
}
