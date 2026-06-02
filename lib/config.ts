export const CONFIG_WHATSAPP_NUMERO =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMERO ?? '5521989222145'

export const CONFIG_MAPS_URL =
  process.env.NEXT_PUBLIC_MAPS_URL ??
  'https://www.google.com/maps/dir//Casa+de+Festas+Mundo+M%C3%A1gico+%F0%9F%A7%91%F0%9F%8F%BB%E2%80%8D%F0%9F%9A%80%F0%9F%8C%8D,+R.+Bicu%C3%ADba,+10+-+Vila+S%C3%A3o+Luis,+Duque+de+Caxias+-+RJ,+25065-290/@-22.9089442,-43.1824749,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x997080f8538ae3:0x431a762715dd563d!2m2!1d-43.2886545!2d-22.7706577?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D'

export const CONFIG_CHAVE_PIX =
  process.env.NEXT_PUBLIC_CHAVE_PIX ?? '16194164760'

export const DATA_EVENTO = process.env.NEXT_PUBLIC_DATA_EVENTO
  ? new Date(process.env.NEXT_PUBLIC_DATA_EVENTO)
  : new Date(2026, 7, 2, 13, 0, 0) // August 2, 2026 at 1:00 PM
