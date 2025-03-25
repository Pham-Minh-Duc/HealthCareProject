import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import SlideMenu from "./slideMenu"
import { useState } from "react";
import { GestureDetector, Gesture, GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, { useSharedValue, withTiming, runOnJS } from "react-native-reanimated";
import serviceData from "../data/serviceData"

export default function HomeScreen() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Xử lý vuốt để mở hoặc đóng menu
  const gestureHandler = Gesture.Pan()
    .onUpdate((event) => {
      if (event.translationX < -50) { // Vuốt sang trái để mở menu
        runOnJS(setMenuOpen)(true);
      }
      if (event.translationX > 50) { // Vuốt sang phải để đóng menu
        runOnJS(setMenuOpen)(false);
      }
    }
  )
  
  
  return (
    <>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector  gesture={gestureHandler}>
        <View style={styles.home}>
          <ScrollView >
            <View style={styles.menuButton}>
              <View style={styles.menuButton__content}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={{
                      uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIWFRUWFRUVFRUVFRUVFRYVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQFyslHR8tKysrLS0tLS0rLS0tKystLS0rKy0tLS0tLS0tLS0tLS0tLS0tLS0rLSsuKy0rLS0rLf/AABEIAQMAwwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAD8QAAEDAgQCCQIDBgUEAwAAAAEAAhEDIQQFEjFBUQYiMmFxgZGhsRPBUtHwFCNCYnLhgpKiwvEkM7LiFjRD/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIhEBAQACAwACAgMBAAAAAAAAAAECEQMhMRJBQlEEEzIi/9oADAMBAAIRAxEAPwDoQE6E/SjSuDBsJQE8NRCBgCdCdpToVVHChcQ4OaDe48DClr6o6oaT/M4t9wCuC6R4urSfra6HEddoIfrA4yBZwEXLRYXJiEWduwdi9TGEAnURaCedj6FVa+ZtY4CHAus3WC0apAJPcBe3BcJQ6UVqQD2Br6erVomIJB1Bm5ZuTFxtACo5z0ldiC12kgN2nS6Jkuho3M6TMjb0ab09SxGKdTZr0OqtFz9OHPjiQzj4AylyzM6OIbrovDhcEbOaRu17Tdp7ivLcB0orYd0scKjLTEtJH84jfgCumqZhTxIbicJ+7xTe1p0g1GxJp1Gmz2mPEWjuaTTtiE2Fj9G+kLMWwgjRVZarTO7TsCOJaea2p4KBsLD6W4k06Mt7Qex1t9LXt1nvkEN8XhX8VnWHpu0OrM1/gB1P/wAjZK5jOc7o1Q4a2yRZjrOFOmHVA4A8XOYD4aUV1zDIkcQCPAoLVh5BmjG4ZhrPDPptALnEAaYGm54wWq7Rzuk+9NtV4/EKNQNPeHOABHeFDS8Wppalw9drxafAiCnuaoICEgapS1GlFiEtTCFOQmELKoNKFLCVBa/axzT24gfiC5tF+a3tjTp/rj8QR9cfiC5iTzPqkNSNyb7X9ldmnUHECJkKL9vYWhweCHbGbX2K52rW0tLpNgTHOL25rgK+bFlU6HO+mZc1oMgF3Ictx5pNnxj0up0qosNTU4y0kBrQXOtIMgCwtuYF159m+bipUe40yGvGoSQ0teCeu0t4wGiON53VClmBBcQeq4zpDnM8dt/ApPofUklsTtLtP+bZWNaRVWk7do3PV0kg7GBA7+IPzSDhzI7/AM+IU9Sg5p2gjkSfmYNlcpvBb126wey4AMff772M7LRpRpUy1wkzOx4G1gfVPw1YteC12mY8o2PkpqlJhbBkQOq6I24kfdQYeqCNLolrxcXkG0zy/NFX35lUZXFdvVqCzo2J2cD3GPjkt/N+lz64ZTpvNIEfvCyzo4gO4T3Lj8dV68C8iPMfnCnp4inSbtqdG5Ei+1uPNTQ2q2fua0U6RLKYtppNDAeep5kkniZPisfH5uX9ptogA9YRb8RPIKnVx+o9ZgdPMunwkfkAonhnAFjuRJI8zvKuk238izNoe17+toIDQ/r6QbGASBMcZG0TwXfYXN8RUuynT027btLiOYaJgeMrydlHnYxNrSOEDxjyJW5l+PeGgh5J2gSR3SSY+6zYsenUcaD1nN0njpOocr2B84VoYhn4guCwOfAxrpOBPFpEf6iPS62qFZrxIkeIIPusrp0RxNPmmOxdPmsXQk0KGmwcdT5phx1NZRaE3SE2aav7czmhZWkIQ0s6EfTW4aLeSPoN5K6YYehMr02lpDtja63/ANmbyVLHPFP+Bx72t1Dzumled57iMVRbYn6ZMB7tOojgHtkz4wD635XUZnTffbjxEDh5L0jN81pu6v02HcS7U/gZhoEAxz5rkiGAu0MBvZzyQ1g3MHht3nktQ0yaWJMyWjhe/wAAgK5QxQI0vYS3g5u7T439E7G4tpIYJcTF2xvxAESR4+yqjKnnsF1r6SII8pn2WlaByxsahDhMySR6x2fG4MKrin6NTPo6Q7vJaeIg6o9OKbRqVKfWBNpBBMgyNiOR/XBStzCeRbHZN4P8p4H59lFZVPFmL3A9pnb9fmmuMAEbmT5TZWK1MOMiILhfjedx3fcKR9EODqkWFmju2A9FWdKVNxJuefPzV7A4APN3nzZLfO/fxVBhAuVZoYt/MAcuA8jb2RJpedk7Z6vW726o9ZgJzGmnvTLuUkn0U37XDLFxkcy0d8Rc+gVF2KqEx2Rz1OPnq3RrqHVXOAjSAOAAc8g8YMx7paMgTBF97Eg8RbbwlQjEOBhtwd3OJv4EcPdaGDrlzINQNEblp9jx4722KEQHEkW22kjUNvEm+y6HJs7rGGkCoNgQRq8SOK5+thhEu6pm34XAz2RMnhfj3bK1lNSm0zB1Gwdcae8Hn5+qzYr0BjwRO3jH2SyFdy3DsdSaZmw338zxVn9iZyWNLtkGEhIWx+ys5JDhWck0bY2oIWv+ys5IU1TbQShIlXRzKs/NtGk6nFh4FpcD5Rur6pZll7KzS18wRFnESORjdCOFzjE0XM/+/PMPpiq48ocOfiuRdWmxgCe1BJP9Ddo77eK6rpH0ZbTdLGte02ADNL5HBhpjSe/qja65DEUNLnA2MwQTJvwJjdI0sis1vYEDneSe938KaWvqEO1bdkgkR3t8OaWngg65JOkcRbyv+oV7BnTrdpLiwACdg4zHj4dyrUm2bjKp/wAY7Q0xPOe/8+CzS6DI25clqty+pUdIB33O11cb0cIEutO3IcbqfKHwtY1K5/XHktTMKZbSpt4bkRxVrLMlOsDgPH4XZ0ujxqwXiA0NAkbwBwWbnI3jx2x5U6iZiNk+nRcDt6ztxK7bPckYzVpBLiZnbyCwMNRLpDhtAmwIB/4K1M5Wbx2VlYjGv1Q1zgO4x7clJh36u1J4biT6x8oxWAc1xBHGPBFAvE6X6T47ep+FrbGrPT34AG7C7+h+57gdj4Ez4qD9rcDF2kb7yDyvdvyph9Vrh1nHmWuvvyVltI1NyDA4x8/ZDX6QUMS3iS7uBgHxJmfJdD0fo/UdqLWxMBrnkSfAGXR8rHdhNP8ACf8ACJ+9/RdLkD2B4+lUMkwWvpzFgZjY3/DfuPDNWO8wjYYAVOmUqfVE7+AHwpQ1ZDCEkKTSkIVEWlKnwhESFEppKbqVZSSmV6eoRfyJb7hIXI1IOezLLuo55pEBrSS413uMAbaJFvNeaUWAuk2uTA5kw3wHHyXsWbguo1AN9DvheL4eoW6hxDiJ3ncj7+qRY1jV6jyO6f8AbC1OiuXfUpgHi7Uf+VjFv7t4HMwe6TH2Xo/RfACnSaIvAJ8T+oXLly1Hp4sd1do5XTAADR6X9VadlDHC7QT33+Vfp01aDLLyzb1XTIwOSMDtUX/Wy2qeFCKQVpgXSd+ueV14zc2y5lRhBb7LyungdOJeyLEkGQLQ4fZ3+ley1tl5zm1AMxdRwF5+QJ+VqdUncYGYYDiRfqk+IABXOvw+mrHAzvttxXdZowh+mAS7UOU6i3T8rlsRQBqun+F3sunHltz5cdMDE0IJLDG9tvT8lVl4iSQN9ytfEUQJPA3PgeKrR1YO7Zg945+S7x5rELKzxBDpB8/kLquiNJtWs0ho1tvdpMtHdeOG/Pdctg6gc7S6IdYT/C7hfgJO/evTOh3R5gayq5pbVaXAm7bglptxmFKkrrvppdKmhEKaRDoSFqnhGlBX0oU+hKhtSKYUF6YXoyUlGpROeozUU2Jq7+q7+k/C8XxtM0jsRqY1995eJv4SvYvqrz3pvgoqMcBZxLfg/wC5WLKZleE+oWtEXcJ8DE/ruXqeXUoAXkGAwuJnXSYSByIn0XUZJ0udShlZp5XBBHiuPJhvx6uLPU7em0mK05llj5TmjKgBBWtVrAhcPHem0xdXGUyqdKu0XKXEZ/QpiXPaPMLeHbGe09Zq4fPMGXYtpA3/AOB7wtbE9OcLJAcCRyIWbis/a9/1GNk2AJifQX4rVwvsXDOT1FnGC/etcP4Y9oiO+y4rOMM6ndwjUS48gDv8Beg4XHCoes2D8H9QqvSHANfRf1ZcQIPK/wCiueOVxuq3ljMo8rr4yQQO8eVgPDikqtgGOQ85aPumZrgnMIkRqkgbWjj5H2UdZ50gndwI85/svbO3hvV7RYTCh5AJiTBPCINz6L3Lo5h3Mw9Nr+0Gw7xBj7LhuhHRo1G069oJIc3m3rNcD5gFem4ehpaG7wAJ5xaUYpulLpU2lO0qogDEaFYDUulBX+mhWNKEHNuconvTXuUFR6wye+ooHVVC+qoH1FBZ+ssjpJTD2MtJFRpHkHT8BWS9RVhqdTH80+xH3S1rHu6Y7c2r0Yp0GjVuS5pOkcyEZZmj8ZUFGvTY97oDC1ul5J4Ai3fJI247Lsn5MQ4VGtm0HmfNWMqyanTqfUZS0vvDhYidyOXkuM5MPuPb/Xl+2DlVaphzHWLJjrAhzCDBa4cCu8wdM1GyOSzs0wDWse6JdULS4kkkuaNMye6B4NbyW50V/wC22eSxlN1vesWdicM4Agrn8Zl1GC6pZo3kmPZd3XaHErAzrKNcE9lpnTEgnmb/AKuszc8rW5fXLYPM8oDtJoB5HEUg8XMe5K3KbMvq9WjpaR/Bdhnlpt6Lnsu6CRXD/qjQHNJbBBIaQ4NN+YF/ZdHm/R5tWo2o0AETt38zx/su1smPVc5jl8u4U5W0dm15nf5VnEU+rB5XWhluXuY3rGT+uaZjGLz52u2N7eX9PMPdpjaf16Kl0ZyEVqk1BLGMdA31OI6oaOK6Ppdhten/ABf+JhdZkWGbSYKYp6dMNBMSRAue87rrOTXHI5/17ztU+iGUMp0gRqB2Ny2bDtAHfddJChwDIB/qPyrUL1cXeMteLl6zujAE6E4BOAW9OZganaVIAl0qiGEKfQhTSuCqPVWrUS1nqpUeuTJKj1EXJHFIiFJQ10OYeTgkUeI7JPK/pdStY3Vleg4BwLQrrGQsPIMRqpt8FusK8c6fTvbKzup1VuZJS00h/SufzMa6rafCxP5Lq6DYp+gW8fWMvNI27qSpRBHgquuFaw9SUwv0mU+0AwjTu0K1SwQTntHiE11Zb6nrPd8Q4iBssnGGyv1qiysbUXDO7d8JqMWthPq1abTsHaifAH+y6fF1BqLhdrT2ttRGwCxsrZTLy+r2WibzEi94WxUoTUIiwM34f8reOOVkkS5ybqaiyGgevjxT4SpQvoyPm3vsAJwCSE5oRCwnhACWEBCEiEHmFYqq8qzWCrOXFkwoSpEAkcJEJUKDS6KYkgaTwsux/aAxjnnZoJPkF55gKv06vcbrt8NXa5kG4IuvNyTVfR4svlizsqzNtWqx8iXN1R3ngu3FdppgDeV5ljeiJbVFXC1fpEcN234RyW7l2HxnVbVqsAO7qYOryDpA91Z141rfv06N3NTYVtgf1usrCZA5r9QxNWDu15Lx5ajZb7KYaABwEKY4WemWU8gJVaq5TVHKtVcmVZxVqrlk41y0azlk40rnp120ckY4N1AxfcR97LTAhVssbFJvhPqrS+jx4zHF87kzuWQSgJAEq6OZ0J4CYE4IHtSpqJUDpQmShFeZ1Qqrwr9Zqp1AuLKApE4pqAQlSFQRVhseRWxSxj20yWtLoEwNyOMc1lkLQyWru08Fz5J1t6uDL6Pw/S+lyvyd1TPIg3BXRYXpBh3tbUEyLFvEHvXK4gBlWXAEO3B7tiFcw+WYbcNibnS6BPPSIC53T6PFxTKb27nB5lSqdh1+RsVadXXEUstYbUg9u3W1utvNpi63cDgSwCalR/8AW77C3ylvXrjyccxrWL5UFVyUugKCpUWNMoazlnubJPcrdQ8OJTatPS2EyuouPbUyb97Sb9PrQNJjg5tiD5qdWuh+UnDUet2nvfUcOWvYegCR2F/6rSOzGoj7L6WP+Y+blf8AqqqVWsZgXNkgSPhU1UPTgUyUSgklBcm6khKEO1ITJQorgqzVSqhaNYKlVC5VlTcE1SvamQshsJIT4RCBkKTC1NDweBsfsmhKWqXuNY5fG7dIMEysIcAR3qej0api4c8d31HR8rLyrGlkB23A/munoY0EBeay49V9HHKZTcTYbAho/Mz8qY2URxQVeviw0S4gDmVn1Viq9UMRiQLC7jwUDq9Sr2Bob+M9o/0t4eatYPBBu1zxJ3V3omJ2FpEXO638myrWRVeOqLtB4ngT3fKkyvJ5h9QW4N597vyW8vTw8H5ZPLz8/wCOJVVo4MCo+p+IADujdWkBex4yLJzPBA9Zgg8RwK10EIOTKSVv43LmvuLFYdei5hghZrcpkoJTZSEopdSE2UKDkazVRqtWlWaqNULlWFJ4UcKV6YoGwkT1PhMFUqmGNJ+PMqCqArNKjxPotY5E5gl1z7BaWC6Nue0E77rUxptzuHGpxbzaVzeY5ljcI89YPpk9UubMfyktj1XodXIDTqs79RPgBHyQtGllLY6zQ6RcOAII4ggrXx26Y5fF5ll/SnE1LENB5taQf9RK6TKKesh9Uuc4fjMx4DYeS3//AIHRdFbDH6ZnrU3SWTMdUi49/JbGC6LmYqPaIiQySfcCF58+LO3Uj14c2Em7VDC0i8hrRJ5BdRleUhkOfBdy4D8yruDwbKQ0sbHM8T4nirC7cX8eY931w5f5Fy6nUCEIXoeYiUJoF05AIQhAKviqAeIIU5UbigwcTl5GypvpEcF1NiqlbDA8FNNTJzyFsHL0KaXbgqwVCsFp1gqRoOcYaJK41llvClwWBqVTDGk9/Aea6TAdGgb1DPcNv7rfwdOkzqOlkbdWAfArUw/aMPK+iYmah1HkLNHjzXV4fBspNhoA8ArFICLbKLFVYC6zGRWdXpBzw3gLu+wW7l7BEwsiiyBfc3K2svPVSFR5jg9ekjds+hj8llVxpELo1i42lrqtYOJv3AblCLGTUSGSRZxPoDb7+ifiv3b21OB6ruQB2PqrzWgAAbCwQ9gIgiQRBHciFSqDDjT1CZjsk7lvDzG3pzU6oEhSpEAAlQhAIQkIQMe5MLSVKGpyCJtAd/qpISoQJCEJUHBDLAG6qkiey0b+JV7LMA0bBWM9d+8jlA9lfy+l1QszGAp4dR49nstRrFUxoWhXw9MEW6p7vuEPYZh0eXFWcFQ4+ibih1iiqb1oZYZWc8rRykWKgvlZNYQS/m9rB4Tqd/4gLWKoZgwzRaBb6knya4yVUXWJybJlOQVceXABzROkyfCLhWKVQOAI2KeqRH0nT/8Am4wf5HGwPgdu6yguEoCQ7wnKgQhCAQhCAQhIgVCEIESoQg5npIyHzz0/ktfBjqhUelNPqtd3ge4Vyg6w8FILVR4Aus/EEkp2PkFruHZPyCkpDU5VV+k2AqtYbq47ZVqnFEZdVaeU9lZ2Jbur+UHqqLWgoZmp3Nb7uP8A6+6mKZTFye+PT+8qocd/JOTePkPulQCjxBGk6hIIiOc2jzlSBVMXJqU2jmXnwaIHufZBPh6eloBJJAEk3JUiEIFQhCAQhCAQhCAQhIgEqRKgyOk7oog/zt9yik+wUXSV84af5mfKZh32Cn2L9duqm4d0jxFwo8vCloPsmYFsSPwkt+49iFRceVXcp3qu4oKmIbYqXKXcEPbYpmBs5RWumUOyO+/rf7pavZPgfhOVQJUiEAFXpCajncoYPK59z7KUvgEnhJ9EmHZDQDvufE3KCVIlSIFQhCBEIQgVCRKiBCEiKVCEIOdz8/8ASnxb8qPDGw8EiFPtWlhypqf/AHXD+Rp85cJ9AEiFSrL9lVclQiG8FFR7aEIrUft6fKehCIRKhCCtX7I73Nn/ADKyhCASJUIBCEIEShCECJUIRAkKEIBKhCK//9k=",
                    }}
                    alt="avatar"
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 20,
                      marginLeft: 20,
                      marginTop: 20,
                      marginRight: 260,
                    }}
                    resizeMode="cover"
                  />
                  <TouchableOpacity onPress={() => setMenuOpen(true)}>
                    <MaterialIcons
                      name="menu"
                      size={40}
                      color="black"
                      style={{ margin: 20 }}
                    />
                  </TouchableOpacity>
                    <SlideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}/>
                </View>

                <View style={styles.title}>
                  <Text style={{ fontSize: 30 }}>Xin chào,</Text>

                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontSize: 35,
                        fontFamily: "System",
                        fontWeight: 600,
                      }}
                    >
                      Minh Duck
                    </Text>
                    <MaterialIcons
                      name="front-hand"
                      size={24}
                      color="rgb(255,215,0)"
                      style={{ marginTop: 10, marginLeft: 10 }}
                    />
                  </View>
                </View>
              </View>
              <View style={{ alignItems: "center" }}>
                <View style={styles.search}>
                  <MaterialIcons
                    name="search"
                    size={40}
                    width={30}
                    height={30}
                    color="black"
                    marginLeft={10}
                    alignItems={"center"}
                  />
                  <TextInput
                    placeholder="Đặt câu hỏi với trợ lí AI"
                    placeholderTextColor={"black"}
                    style={styles.input}
                  />
                </View>
              </View>
            </View>

            <View style={styles.container}>
                <Text style={{ fontSize: 16, paddingTop: 16, paddingLeft: 16, paddingBottom: 10 }}>Dịch vụ toàn diện</Text>      
                <View style={styles.serviceContainer}>
                    {serviceData.map((service) => (
                      <TouchableOpacity key={service.id} style={styles.serviceItem} onPress={() => router.push(`/ui/serviceUI/${service.id}`)}>
                        <MaterialIcons name={service.icon} size={30} color="#DAF4FF" padding="4"/>
                        <Text key={service.id} style={{paddingLeft: 5, width: "110", alignSelf: "center", color: "#DAF4FF"}}> {service.name}</Text>
                      </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={styles.container}>
                <Text style={{ fontSize: 16, paddingTop: 16, paddingLeft: 16, paddingBottom: 10 }}>Chuyên khoa</Text>      
                <View style={styles.serviceContainer}>
                    {serviceData.map((service) => (
                      <TouchableOpacity key={service.id} style={styles.serviceItem} onPress={() => router.push(`/ui/serviceUI/${service.id}`)}>
                        <MaterialIcons name={service.icon} size={30} color="#DAF4FF" padding="4"/>
                        <Text key={service.id} style={{paddingLeft: 5, width: "110", alignSelf: "center", color: "#DAF4FF"}}> {service.name}</Text>
                      </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={styles.container}>
                <Text style={{ fontSize: 16, paddingTop: 16, paddingLeft: 16, paddingBottom: 10 }}>Cơ sở Y tế</Text>      
                <View style={styles.serviceContainer}>
                    {serviceData.map((service) => (
                      <TouchableOpacity key={service.id} style={styles.serviceItem} onPress={() => router.push(`/ui/serviceUI/${service.id}`)}>
                        <MaterialIcons name={service.icon} size={30} color="#DAF4FF" padding="4"/>
                        <Text key={service.id} style={{paddingLeft: 5, width: "110", alignSelf: "center", color: "#DAF4FF"}}> {service.name}</Text>
                      </TouchableOpacity>
                    ))}
                </View>
            </View>
          </ScrollView>
          <View style={styles.navBar}>
                {[{
                    "name":"Home Page",
                    "icon": "home",
                  },
                  {
                    "name":"Notification",
                    "icon": "notifications",
                  },
                  {
                    "name":"Schedule",
                    "icon": "schedule",
                  },
                  {
                    "name":"AI assistant",
                    "icon": "assistant",
                  },
                  {
                    "name":"Person",
                    "icon": "person",
                  }].map((item, index) => (
                  <TouchableOpacity key = {index} style={styles.navItem} onPress = {() => router.push(`/ui/navbar/${item.name}`)}>
                    <MaterialIcons 
                      name = {item.icon} 
                      size = {24} 
                      color = "black"
                    />
                    <Text style = {styles.navText}>{item.name}</Text>
                  </TouchableOpacity>
                ))}
          </View>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    display: "flex",
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
    paddingBottom: 50
  },
  menuButton: {},
  menuButton__content: {},
  title: {
    padding: 20,
    paddingTop: 15
  },
  container: {
    flex: 1,
    padding: 15,
    width: "100%",
    height: "100%",
    paddingBottom: 50
  },
  search: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: "90%",
    height: "50",
    backgroundColor: "#EAE8E5",
    borderRadius: 20,
  },
  input: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    fontSize: 17,
  },
  navBar: {
    position: "absolute",
    backgroundColor: "white",
    left: 0,
    right: 0,
    bottom: 0,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow:" rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
  },
  navItem: {
    flexDirection: "column",
    alignItems: "center"
  },
  navText: {
    fontSize: 11
  },
  serviceContainer: {
    backgroundColor: "#D6EAF8",
    borderRadius: 20,
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  serviceItem: {
    backgroundColor: "#51A7BF",
    width: "46%",
    height: "60",
    borderRadius: 20,
    flexDirection: "row",
    padding: 8,
    marginTop: 15,
    marginLeft: 7,
    marginRight: 7,
    justifyContent: "flex-start"
  }
});
