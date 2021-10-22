import React from 'react';
import { Flex, Box, Image } from '@chakra-ui/react';

const Videos = () => {
  return (
    <Flex
      paddingTop="50px"
      paddingLeft="100px"
      h="100vh"
      flexWrap="wrap"
      spacing="20px"
    >
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAACiCAMAAAATIHpEAAAB11BMVEX/zyowMDAsLCz/zBTc3Nz/2iP+/vzr6+r/zhASEhLMzMzi2scAESz+///b3N78zCr/1CoHGTL/1B3/ygD/2ACcgSscIiyVeyv/1ionJycAAAD/6pzy4LMsLTAjIyMkKDEcHBwpJiz/66AZITEA1G5fX18RHTH+88cAlv/r16Hq16coJCyjo6N2dnaNjY2Li4vy8vJqamo3NzclHC0mHi3/jwAjKS3t6eCzs7OAgIBGRkbAwMBVVVXcsyxdUTDj3eMAwQDJoiD/4FgiFC07SSpehSMvAAAsOTrktxvAni11Yy8yISxBQUGKcy8+OjBPRjC3li1pWi/tp7P42IH/vAD/54X/4mgAABITJS03QSxmkyFFNCoL3euExBeU3hCe7glJYSiTVyFdPiipYx1RcCc+TyrafBJvoR9FWyn/8Lh3rxwRAB3+9tUAACwWmVYJvWUpSjgyFyoQpFsnVz0chE4A0XMJtmIha0QxIh0yJA0eXZMAr9EPfM0An/UAvrcchV8nQlorMkwac70jUXryjp+F0IiY05z3cIn/AEpjzGr4xlkpXWEldn0tFBAYv8ssREYbAC4H5vSM0hPEcRh8TSQcq7UikJgrWF2o/wD/mADqgw1XPCn61WzpCDKGAAAOxklEQVR4nO2diVvbRhrGK0UgTFYQHMdEJhIG1yQsspENdoztJA3BgYYjSVNaDmNzOoQm3Wa73SXd7naPbttsOBKuEOgfuyPJBh8zkmwsrNGzLzGWZJPH/j3fq5lPo2/mI8Jk8jR/hIVqzalI7Q+u1pqIPtUaVJE8n16qNRF9qjWoIjkxsanJuIVxsWmO2yg3ytWUmCJsbJrlNvr1x3/4ZrS2zCQ5a41Dt5TP+/JjoK9fdtQUGk42zcXbHyVw3337Ut4jbTY3e/pteJubzG3yyjNrM4QbPjbNnd9e/uljOeQ6wFmODFBUo89NsCzBkyTPC1QsSrI8CXhGIm5wlGAHKJt0oOrcak1Dv7KfePTlt9/JIfcNSbA+ppFiBtx+HyFEvf5GppGhXQEh6vb2UpTLP+AmeD/j8vnj1QbXPo6NTXM+/fNfRtdlr349KnHzupgYRYuCKFAUE3EFbX6GZuKMCIDSYsTt9jNBmmKqjI3w3MXGpllu3LfDr76/8VfA7ccOiVsgwEQYWqQEkQnUU4Tgb6Rc4AgP4lCk6TGvnwmIFBOtcsA58cGW8+k6+cONGzf+9vcfQWcEcGMYmmyspwNBBhgS7EUCDCOS9QzTGANHG+t7GQG4t8rccLJpjts/bkj64Z9yH24sEIjbSFs8zrLeOAl+jbnZYAA0qt54XDoajI4FbN5oIFhVbFjZNMvtlYzt+1fZb8CyUiSRpPLI/pI3SOUowYJnFvrtKxeHEbY8bj8Q61UGUZ6wsumJT//171eq38p4dd3CL96khqGWzIA4Aids5rmOhJdNzcMNL5uahhs3gRU203Brb8XKpqbh1nWr1iTKU615ZYWbTc3CDTebmoUbbjY1CTfsbGoSbu1X/s+tEmFnU3Nw4yYwaxVMwg0/m5qDW9dIrTGUrVojk8Q9xM6mpuDmxM+mpuCGoU3NwA1Hm5qBG442NQM3HG1qAm7cbQxtagJuzkcY2tQE3Dw42rT23PC0ae254WnT2nPrwqXSo1C1xoapTWvODVObQrlxLdWQvvobTG0K48Y9tl84u+y39YDjHuNpUyi3h9Xg1jChhxuuNoX6tL0a3C44dWDD1qZQbl0NVcDW3KIDG7Y2hXNrPju2hpEuHdwwKsgqEpTbiHbANahIfv2WRwc3bG0K5ea5pcnNXqcimdtdHdywmYWgVHD3VIHbIx3tAr42hXJzPjoTN7k1brjSrs0Nm1kISgW1z5Wzc7OPa3PDqLy5RFBu45odOG1uD7S5YWxTeH76oArcdKRZ7YU2VWuiayu93G6fiZvSD9FOs4pa04buiyZVNwQclNvEmc5vyh9rh1tR3eSF7qZ83bnTZBb9Xic3woPidlmWws0Bk8RNeat2usAVfhLAjfrpM4pquvaEaqKo//x8hzKH9HNrQWBrbnsi6bLE7WobTFdz3LTTrOKCLMDtl19//azp4uefjzTdef3JJz831ZqYIv3cEInW5WsiLUmKN0cnA9OkI9vtvaXJrbi8OY/b57hygydal6/R+dzqS8V8Uac/zSr6JIDbnV9+Ah+z+78Xm5qo169Ngq0Mbp67lXIbzHH7VItbSd2kdH5TPiegRoF2oba0TqWfGyLR0sGtTnea1VU8C8EJN7NJPzdEoqXNrd6R49aqwa20vLmhu9Gk0s+tVZtbmyo3+4OwOrfS8uZLV760mVJftkLSQeiXCsMTLRi3wub0pkNvmlVa3nzpipM0pZy6uSFGAiHcmOfPruep7YTbQ3VukFkIrMDtoV6fMoMl+YKSngbVuUHqJi3AjeD0c0OkpxrNAqQgywrcumDYdHKT39qsni5wROkVS0twGzkbN61RwHbIRynixrLFn38d8b24jsL9jp6C3by90v8TLl56L18RN5hRy+CmkWbB6iYLua2/2cjntAmObAyXEJMxDa325O2SHdOJaS7vTYkTcHw8gAAXnsrfGxtwk3ygNweuDG7wRKtq3KB1kwXcNg+2ZG4swbKbw+tEcpglt7bXWWJdOiTjIXruTd/jiJ7+p2tkH9lB9vRN35NeeHs4MyRx65/u7+8AFHf6+zmij+Q4lmS8fHg2PCW9yhHhKWlusTA5NRsOL2TCYekVsDl1TJKij2eZE8blcIOOBJbBTX0UEFo3mc9t/SC59Sa5/W77XXJrOLm1sZXc397aur+RTILNdyDu+tbSh0NzqfRMOp1KHKYTc+nD6fTOWh/gOXc4N5+a3wFHlxPpVP/a4dvldDqxk0r3CTHX4oej3YWj0F4m9GExdJTJhEK7S5kQ2Fza+xBa2j0KEaHdBaePdgVpVwU+hSeourjpSU+h5c0F8bae3F5/N5zcTm7s7x/c39zYv7/+Zut+8v3BQfJ9UuaWmFs+fJFaW5tLJcD2XGI1kZ7bkQKOOLy3klrdSaw9nUnNv+VeHL6dm1me2xlKu2P+qYUMQMYBOouLu0tLS0e7u7uh3d2Wo8WupczsXuhFaDaTmWWDootqtFXADZ6g6uemPgoIL2/O58YOJzeHQawdAGr7W/uSazcPQKztJ4ffbSfBya5vLrEzn5pLP53bSSdSqcRc4t5QeibR19PT03/4djqdAtzWZtZSaz1PD2dmUqmZ1EqaF2Jf7mZCe6HMh6kPU1O7mQ8LR0eZhdDSXldodzazMDUb2s3sLYT23AHKxYqVxBt8JFCVW67bq3B7rNbthZc353MjDrY22Tfvt4GG19+8Z8mN9yyxsU2ApuH9MNgluaHplQlieXp6ZWWVWF69tzJN9gwtD80vL8/3zHf0rK6uTA8NTffNg73VefDUt0qssgTjPVo6njpeXCQXwySxdzx7vHhMHu/Nho/3iEWCDC/uTc3ugZfA+Y1k4hWc3+CJlkq+UDc42fbs+TN9aRZ8FoI8buyb/WG518CSUVbuPYB/brf8JB2UzuugJWCjLNfRAVoEcPqXWoqevqdra09BY0BKRzlw+pde6ZAepPTDewMLZJgETQD4DRrR7GZY2VSOSI+xXtCe+vwVtKfwWy5h3Dq/ALxuZtP7545sumBXS7MQdZMFPs32QXgfZXPbbKzbzduEARsPNsEP6ba5WWlTjIMnt3QUvIkEW/1ffdVPosWyYZVXTyUR4yvpv8FHAtHXQ7JXLa879IwCImYhgOULQarRFaFFIkYJAyIt+GkxThG0O0JHgjQdF+goS4n+Xlr0+sF5nKIGbJGYWxeZclQGN6Idgk3z+hvzzJFLs9S6b4i6SRg33ku7Yn7KS1Ne8OwSYgGvyIpexuWKRVykS4z6qaDoj0X8YoyJM7EoH4/rTAkM4ga95VKTW6dDR5qFKm+GxpsgRhsHqIAvUu9qjMVBB8wlCkyU6fUJdG/Uy/h9okD5IxE/7fcFfSA4hUht4w2aaGlyazsZBVSJN1R5cwE3JZNko4Iw4IsPjAmROB+NDHh9LB8Q/HwgEnD7BcIvCO5eIegNBLxjEYGICGO8QNlQX/9cuEFvudQaXzgdPVVLs1DlzQXtQtwrn5alBoFnefAEmlE3L9Hk3Tx4sFLzyssPVhbYBG8aE4JVx1YeN1iCqsntZPRUJc1CzkJQwM0rdaEqUPVdWh43aKIF5ZbXoEqdYM00C1npUeBTW8RvBIKKVFZ7Cku0irkpQzHXO78YdCjcrupIs1pQ5c0F3PgBxoCWsTKVxQ2WaBVze/5sclDJrrLcdIwCousmC7i5MY036C2X+dzq6q7m7tuSklOmkBt6FBBdkFXYnjb6Kzq/GaGyuMFuuSzkli+ZG1N/kmahb7ZsQd5CXtAu+CJEDUkVqixuE1luzcp9ghrc6mRuJ+lpA/L0plLeXBhvpnFpedwIIouKpq89+SjLTg83BTay+6ZSN2mF8Sxp/VaF200J1MXu3yR0CG7gNCcnD3JaL4cbOs1SKciyBrdsoqVwo2kRhF0zhBtgNth2vZ4pSOvR3NRmIbAIt1sF3GR2ue0sN6k5nbxef3oZqVMzzVIrb7YGt2yilc/tRDI3wOzZzRNmhWk98mZLtdWbrcHN+ak6N8ckUwAtm9YraRYqPVUtb77U+uJ3ptSL8TK4ZRMtNLfSvF5K69VvtsS5IKtISG7KLZe5W+9LuZVcf2NO0nr7OCLNwrhuslgobrlbLi83P7mmzU0elOl0aIwCYlzeXCIUt9NEC/TcBjsvqnCTLoo8m6zLGz1FpFkWsima20Regip1en/rvgnhJrUN1yevnmT4SnqKaBYsZFOVeaWKLsABds1Pnue3CzKztsHTqyI5bg3wbi/O5c0lQmJrh4xoAXYg7MQst+dFzHI3I6FutrSSTdHcEJOvFNRRFt9To55m4bPIug6hualOvoKq25W5wUcBrdSaqnBD1Lbp4QZPsyxlUxVuqpOvqHKDp1mWsimam/rkKwhuKqOAmK03qSUkN0Rtmwo3e7bHBx8FxGr1Zm2hualOvlLCzX5K2f4Ali54LIUNzU19lks7LNByr8FGAS1mUxVuDx0qRrXDAk1RgwN2s6XFbKqSZ3Gtdy/YGxDs7LBAk2bTs1+42wq7ioTVIus6hOZGtHvaHz8aaSgJqCy30kCzN4w8egz+CvZ/WcymGvNFc86uCWjYlexLgTY+0eVEDNRjtnqzttS5SejaPU4QdnZo2OUCzQ4CzeNpR97dgNki6zqkyU017HKBFkQGmiLL2VT3vO4g7FpKwk4OtNstKoGWleVsWtZ8+CDsiPFc2IFAa747zmkEWvYPsVsWVlPlcCPksPMojSwINA+06YQIu9WbtVUmN5kdONs90DqjFQi/ZWE1VQE3CV1YPzRL2vRc1vuAzUKAu86DmwVteh7crGjT8+CG4erN2joHbla06Tlww3CRdR0ynpslbXoO3JAFWVjLcGxYrt6sLcO5Ybl6s7YM54bl6s3aMhqbRW1qODeL2tRwbha1qdHccF0WVlMGc8N2vUktGcwNz0XWdchYbJa1qcHcLGtTg7mp1U3iLUOx4bssrKYM5WZdmxrLDd9lYTVlJDYL29RQbha2qaHcLGxTI7lZ2aZGcrNWQVaRDOSGnnrLAjIOm6XKm0tkHDdL29RIbrX+aobKMGzWtqlx3KpakNVsNv0PggIlRt7qG5EAAAAASUVORK5CYII="
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt="20px" marginRight="25px">
        <Image
          w="250px"
          src="data:image/png;base64,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"
          alt="Segun Adebayo"
        />
        <Flex>
          <Image
            mt="10px"
            src="https://bit.ly/sage-adebayo"
            h="40px"
            w="40px"
            borderRadius="100%"
            alt="Segun Adebayo"
          />
          <Box textAlign="start" mt="5px" ml="10px">
            <Box>Javascript</Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              DevCode
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              10000 Visualizaciones
            </Box>
            <Box
              color="
#959595"
              fontSize="15px"
            >
              hace 2 meses
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Videos;
