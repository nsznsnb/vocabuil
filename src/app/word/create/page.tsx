import { Field } from "@/components/ui/field";
import { Button, Card, Input, Stack, Textarea } from "@chakra-ui/react";

export default function WordCreate() {
  return (
    <Card.Root maxW="xl" width={"600px"} mt="4">
      <Card.Header>
        <Card.Title>Sign up</Card.Title>
        <Card.Description>
          Fill in the form below to create an account
        </Card.Description>
      </Card.Header>
      <Card.Body>
        <Stack gap="4" w="full">
          <Field label="単語">
            <Input />
          </Field>
          <Field label="日本語訳">
            <Input />
          </Field>
          <Field label="例文">
            <Textarea placeholder="備考" />
          </Field>
        </Stack>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="solid">登録</Button>
        <Button variant="outline">戻る</Button>
      </Card.Footer>
    </Card.Root>
  );
}
