import React, { useState } from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { BodyText } from './BodyText';
import Colors from '../Constants/Colors'

const Carousel = props => {
  const { items } = props
  const totalItems = items.length
  
  const [interval, setInterval] = useState(1)
  const [width, setWidth] = useState(0)

  let bullets = []

  for (let i = 1; i <= totalItems; i++) {
    bullets.push(
      <Text key={i} style={{opacity: interval === i ? 0.75 : 0.15, ...styles.bullets}}>
        &bull;
      </Text>
    )
  }

  const getInterval = (offset) => {
    for (let i = 1; i <= items.length; i++) {
      if (offset < (width / items.length) * i) {
        setInterval(i)
        return
      }
      if (i == items.length) {
        setInterval(i)
        return
      }
    }
  }

  const onCarouselScroll = (data) => {
    setWidth(data.nativeEvent.contentSize.width);
    getInterval(data.nativeEvent.contentOffset.x + 1)
  }
  
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        onScroll={onCarouselScroll}
        contentContainerStyle={{width: `${100 * totalItems}%`}}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={w => setWidth(w)}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast"
      >
        {items.map((item, index) => {
          return (
            <View key={index} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <BodyText>{item.title}</BodyText>
            </View>
          )
        })}
      </ScrollView>

      <View style={styles.bulletsContainer}>
        { bullets }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bulletsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  bullets: {
    fontSize: 36,
    letterSpacing: 6,
    color: Colors.cederChest
  }
})

export { Carousel }