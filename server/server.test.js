const { GameCollection } = require('./games.js');

describe('GameCollection', () => {
  let gameCollection;

  beforeEach(() => {
    gameCollection = new GameCollection();
  });

  test('should create a new game', () => {
    const result = gameCollection.createGame('test-game');
    expect(result).toBe(true);
    expect(gameCollection.getGame('test-game')).toBeDefined();
  });

  test('should not create duplicate games', () => {
    gameCollection.createGame('test-game');
    const result = gameCollection.createGame('test-game');
    expect(result).toBe(false);
  });

  test('should get an existing game', () => {
    gameCollection.createGame('test-game');
    const game = gameCollection.getGame('test-game');
    expect(game).toBeDefined();
    expect(game.getId()).toBe('test-game');
  });

  test('should return undefined for non-existing game', () => {
    const game = gameCollection.getGame('non-existing');
    expect(game).toBeUndefined();
  });

  test('should remove a game', () => {
    gameCollection.createGame('test-game');
    const result = gameCollection.removeGame('test-game');
    expect(result).toBe(true);
    expect(gameCollection.getGame('test-game')).toBeUndefined();
  });

  test('should return false when removing non-existing game', () => {
    const result = gameCollection.removeGame('non-existing');
    expect(result).toBe(false);
  });
});
