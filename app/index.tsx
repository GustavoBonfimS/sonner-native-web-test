import { Stack } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { toast } from '~/lib/Sonner';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <Button
          title="Show toast"
          onPress={() => {
            toast.info('hello!');
          }}
        />
      </Container>
    </>
  );
}
