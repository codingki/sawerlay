import {
  Box,
  Button,
  Checkbox,
  Code,
  Container,
  HStack,
  Input,
  Link,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
export default function Home() {
  const [color, setColor] = useState("#ff6e5c");
  const [wiggle, setWiggle] = useState(false);
  const [customText, setCustomText] = useState("mendukung Pa Dhika sejumlah");
  const [animation, setAnimation] = useState<string>();

  const ANIMATION = {
    wiggle: `.alert {
  animation: wiggle 0.1s ease-in-out alternate;
  animation-iteration-count: 8;
}

@keyframes wiggle {
  from {
    transform: rotatez(4deg);
  }
  to {
    transform: rotatez(-4deg);
  }
}`,
  };

  const code = `<div class="alert in">
  <p class="template">
    <span class="donatur">{donator}</span> ${customText}
    <span class="amount">{amount}</span>
  </p>
  <p class="message">{message}</p>
</div>
<style>.alert {
  position: relative;
  background-color: ${color};
  padding: 1em;
  border-radius: 0.5em;
  text-align: center;
  font-size: 2em;
  font-family: "IBM Plex Mono", monospace;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  text-rendering: optimizelegibility;
  color: #333;
}

.message {
  font-weight: bolder;
}

.donatur,
.amount {
  color: white;
}

.alert:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  background: linear-gradient(120deg, #3c4663, ${color});
  background-size: 300% 300%;
  clip-path: polygon(
    0% 100%,
    10px 100%,
    10px 10px,
    calc(100% - 10px) 10px,
    calc(100% - 10px) calc(100% - 10px),
    10px calc(100% - 10px),
    10px 100%,
    100% 100%,
    100% 0%,
    0% 0%
  );
}

.alert.in:after {
  animation: frame-enter 1s forwards ease-in-out reverse, gradient-animation 4s
      ease-in-out infinite;
}

/* motion */
@keyframes gradient-animation {
  0% {
    background-position: 15% 0%;
  }
  50% {
    background-position: 85% 100%;
  }
  100% {
    background-position: 15% 0%;
  }
}

@keyframes frame-enter {
  0% {
    clip-path: polygon(
      0% 100%,
      10px 100%,
      10px 10px,
      calc(100% - 10px) 10px,
      calc(100% - 10px) calc(100% - 10px),
      10px calc(100% - 10px),
      10px 100%,
      100% 100%,
      100% 0%,
      0% 0%
    );
  }
  25% {
    clip-path: polygon(
      0% 100%,
      10px 100%,
      10px 10px,
      calc(100% - 10px) 10px,
      calc(100% - 10px) calc(100% - 10px),
      calc(100% - 10px) calc(100% - 10px),
      calc(100% - 10px) 100%,
      100% 100%,
      100% 0%,
      0% 0%
    );
  }
  50% {
    clip-path: polygon(
      0% 100%,
      10px 100%,
      10px 10px,
      calc(100% - 10px) 10px,
      calc(100% - 10px) 10px,
      calc(100% - 10px) 10px,
      calc(100% - 10px) 10px,
      calc(100% - 10px) 10px,
      100% 0%,
      0% 0%
    );
  }
  75% {
    -webkit-clip-path: polygon(
      0% 100%,
      10px 100%,
      10px 10px,
      10px 10px,
      10px 10px,
      10px 10px,
      10px 10px,
      10px 10px,
      10px 0%,
      0% 0%
    );
  }
  100% {
    -webkit-clip-path: polygon(
      0% 100%,
      10px 100%,
      10px 100%,
      10px 100%,
      10px 100%,
      10px 100%,
      10px 100%,
      10px 100%,
      10px 100%,
      0% 100%
    );
  }
}
${
  (animation &&
    // @ts-ignore
    ANIMATION[animation]) ||
  ""
}
</style>
`;
  const html = code.split("<style>")[0];
  const css = code.split("<style>")[1].split("</style>")[0];
  return (
    <Stack spacing={4}>
      <div
        dangerouslySetInnerHTML={{
          __html: code,
        }}
      />
      <Stack direction="row" spacing={6}>
        <Stack>
          <Text fontWeight="bold">Pilih Warna :</Text>
          <Input
            type="color"
            onChange={(v) => setColor(v.target.value)}
            value={color}
            p={0}
            width={"100px"}
            h="full"
          />
        </Stack>
        <Stack w="full" spacing={6}>
          <Stack>
            <Text fontWeight="bold">Custom Text :</Text>
            <Input
              onChange={(v) => setCustomText(v.target.value)}
              value={customText}
              w="full"
            />
          </Stack>
          <Stack>
            <Text fontWeight="bold">Animation :</Text>
            <RadioGroup onChange={(v) => setAnimation(v)} value={animation}>
              <Stack direction="row">
                <Radio value="wiggle">Wiggle</Radio>
                <Radio value="2">Shake</Radio>
                <Radio value="3">Nice</Radio>
              </Stack>
            </RadioGroup>
          </Stack>
        </Stack>
      </Stack>
      <Text fontWeight="bold">HTML</Text>
      <CopyBlock text={html} language="html" theme={dracula} />
      <Text fontWeight="bold">CSS</Text>

      <CopyBlock text={css} language="css" theme={dracula} />
    </Stack>
  );
}
