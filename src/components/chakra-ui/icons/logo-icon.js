import React from "react"
import { Box } from "@chakra-ui/core"
const Icon = () => (
  <Box
    as="svg"
    width="1191"
    height="1392"
    viewBox="0 0 488.2 488.2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      // fill="#C9CDD8"
      d="M310.2 1236V363.6C349 355.6 389.4 349.2 431.4 344.4C473.4 339.6 517.4 337.2 563.4 337.2C689.4 337.2 784.2 363 847.8 414.6C911.4 465.8 943.2 547 943.2 658.2C943.2 763 912 842.6 849.6 897C787.6 951 696 978 574.8 978C547.6 978 521.4 977 496.2 975V1236H310.2ZM577.2 832.8C640 832.8 686.4 819.4 716.4 792.6C746.8 765.4 762 721.2 762 660C762 597.6 747 552.4 717 524.4C687.4 496.4 641.8 482.4 580.2 482.4C549.4 482.4 521.4 484.6 496.2 489V828C520.6 831.2 547.6 832.8 577.2 832.8Z"
    />
    <path
      // fill="#C9CDD8"
      stroke="#03256C"
      strokeWidth={6}
      d="M620 441.708L669.01 592.544L669.683 594.617H671.863H830.461L702.152 687.839L700.389 689.12L701.062 691.193L750.072 842.029L621.763 748.807L620 747.526L618.237 748.807L489.928 842.029L538.938 691.193L539.611 689.12L537.848 687.839L409.539 594.617H568.137H570.317L570.99 592.544L620 441.708Z"
    />
  </Box>
)

export const LogoIcon = ({ ...rest }) => {
  return <Icon {...rest} />
}
