import styled from 'styled-components';

const Container = styled.div`
  margin-top: 25px;
  display: grid;
  justify-items: center;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`;

const Box = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  width: 100%;
`;

const Time = styled.span`
  font-size: 18px;
  display: block;
  margin-bottom: 10px;
  color: gray;
`;

const Percent = styled.span<{ percent: number | undefined }>`
  font-size: 35px;
  font-weight: 600;
  color: ${(props) =>
    props.percent ? (props.percent > 0 ? '#DA5157' : props.percent < 0 ? '#4880EE' : '#000') : '#000'};
`;

interface IPriceProps {
  percent30m: number | undefined;
  percent1h: number | undefined;
  percent12h: number | undefined;
  percent7d: number | undefined;
  percent30d: number | undefined;
  percent1y: number | undefined;
}

const Price = ({ percent30m, percent1h, percent12h, percent7d, percent30d, percent1y }: IPriceProps) => {
  const percentList = [
    { text: '30m', value: percent30m },
    { text: '1h', value: percent1h },
    { text: '12h', value: percent12h },
    { text: '7d', value: percent7d },
    { text: '30d', value: percent30d },
    { text: '1y', value: percent1y },
  ];
  return (
    <Container>
      {percentList.map((item) => (
        <Box key={item.text}>
          <Time>From {item.text} ago</Time>
          <Percent percent={item.value}>{item.value && item.value > 0 ? `+${item.value}%` : `${item.value}%`}</Percent>
        </Box>
      ))}
    </Container>
  );
};

export default Price;
