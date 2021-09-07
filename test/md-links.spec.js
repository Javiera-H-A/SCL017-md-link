const {MdLinks}  = require('../index');
const fs = require('fs');

jest.mock('fs');

describe('MdLinks', () => {
  it('should be a function', () => {
    expect(typeof MdLinks).toBe('function');
  });
});

  it('should return true when argument is directory', () => {
    fs.lstatSync.mockReturnValue({
      isDirectory: () => {
        return true;
      }
    })
  })

  it('should return false when argument is not a directory', () => {
    fs.readFileSync.mockReturnValue({
      isDirectory: () => {
        return false;
      }
    });
  })