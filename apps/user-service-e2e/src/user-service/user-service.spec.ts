import axios from 'axios';

describe('GET /', () => {
  it('should return a messassse', async () => {
    const res = await axios.get(`/`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello APIsaaaaasss' });
  });
});
