
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');

test('Homepage exists', () => {
    assert.ok(fs.existsSync('index.html'));
});

test('Login page exists', () => {
    assert.ok(fs.existsSync('login.html'));
});

test('Registration page exists', () => {
    assert.ok(fs.existsSync('registration.html'));
});

test('Server file exists', () => {
    assert.ok(fs.existsSync('server.js'));
});

test('Stylesheet exists', () => {
    assert.ok(fs.existsSync('styles.css'));
});
