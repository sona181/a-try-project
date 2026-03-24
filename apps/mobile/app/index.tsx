import React from 'react';
import { View, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Button, Card, Text } from 'react-native-paper';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineMedium" style={styles.title}>
            CodeLift
          </Text>

          <Text variant="bodyLarge" style={styles.subtitle}>
            Learn programming in a fun, structured, and motivating way.
          </Text>

          <View style={styles.buttonGroup}>
            <Button
              mode="contained"
              onPress={() => router.push('/login')}
              style={styles.button}
              contentStyle={styles.buttonContent}
            >
              Login
            </Button>

            <Button
              mode="outlined"
              onPress={() => router.push('/register')}
              style={styles.button}
              contentStyle={styles.buttonContent}
            >
              Create Account
            </Button>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  card: {
    borderRadius: 20,
    paddingVertical: 10,
    elevation: 3,
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 12,
    color: '#111827',
  },
  subtitle: {
    textAlign: 'center',
    color: '#6b7280',
    marginBottom: 28,
    lineHeight: 24,
  },
  buttonGroup: {
    gap: 12,
  },
  button: {
    borderRadius: 14,
  },
  buttonContent: {
    paddingVertical: 6,
  },
});