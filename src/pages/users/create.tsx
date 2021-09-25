import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { yupResolver } from '@hookform/resolvers/yup'
import schema from '../../validations/validation.schema'
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../components/Form/Input";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

interface FormData {
  name: string
  email: string
  password: string
  confirm_password: string
}

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(schema.registerUser)
  })

  const handleRegisterUser: SubmitHandler<FormData> = async (value) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log(value)
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleRegisterUser)}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Nome completo"
                {...register('name')}
                error={errors?.name}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                {...register('email')}
                error={errors?.email}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                {...register('password')}
                error={errors?.password}
              />
              <Input
                name="confirm_password"
                type="password"
                label="Confirmação da senha"
                {...register('confirm_password')}
                error={errors?.confirm_password}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button
                isLoading={isSubmitting}
                type="submit"
                colorScheme="pink"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>

    </Box>
  )
}