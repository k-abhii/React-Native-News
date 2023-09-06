import { useEffect, useState } from "react";
import { StyleSheet, View , Text, Image} from "react-native";

const News = () => {
  const [news, setNews] = useState([]);
  const url =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=362d5cd20958413dbd382057cd77b44f";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  }, []);
  let newList;
  if (news && news.length > 0) {
    newList = news.map((article, index) => {
      return (
        <View key={index}>
          <View style={styles.cardContainer}>
            <Text>{article.title}</Text>
            <Text>{article.description}</Text>
            <Text>{article.author}</Text>
            <Image style={styles.img} source={{ uri: article.urlToImage }}></Image>
          </View>
        </View>
      );
    });
  }

  return (
    <>
    {newList}
    </>
  )
};
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
      width: 320,
      height: 250,
      borderRadius: 5
    }, cardContainer: {
      borderColor: 'grey',
      borderWidth: 2,
      borderRadius: 5,
      backgroundColor: 'beige',
      margin: 10,
      padding: 10
  
    }
  });
  
export default News;
