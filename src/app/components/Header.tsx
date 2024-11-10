import { Flex, Heading, HStack } from "@chakra-ui/react";
import Link from "next/link";

type LinkItem = {
  title: string;
  path: string;
};
const linkItem: LinkItem[] = [{ title: "英単語登録", path: "/word/create" }];
export default function Header() {
  return (
    <Flex
      w="100%"
      px="6"
      py="5"
      align={"center"}
      background={"teal.500"}
      as="header"
      color={"white"}
    >
      <Heading h="h1" mr={"4"}>
        <Link href={"/"}>Word Practice</Link>
      </Heading>

      <HStack as={"nav"}>
        {linkItem.map((x, idx) => (
          <Link href={x.path} key={idx}>
            {x.title}
          </Link>
        ))}
      </HStack>
    </Flex>
  );
}
