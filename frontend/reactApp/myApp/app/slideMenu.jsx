import React from "react"
import { View, Text, TouchableOpacity, Modal, Dimensions, TouchableWithoutFeedback } from "react-native"
import Animated, {useSharedValue, useAnimatedStyle, withTiming, runOnJS} from "react-native-reanimated"
import { PanGestureHandler, GestureHandlerRootView} from "react-native-gesture-handler"
import { router } from "expo-router"


const { width, height } = Dimensions.get("window")

const SlideMenu = ({isOpen, onClose}) => {
    const translateX = useSharedValue(width)

    // mở menu
    React.useEffect (() => {
        translateX.value = withTiming(isOpen ? 0 : width, {duration: 350})
    }, [isOpen])

    //vuốt để tắt menu
    const handleGesture = (e) => {
        if(e.translationX > 50){
            runOnJS(onclose)()
        }
    }

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }]
    }))

    return(
        <Modal visible={isOpen} transparent={true} animationType="none">
            <GestureHandlerRootView style={{flex: 1}}>
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)" }}>
                        <PanGestureHandler onGestureEvent={handleGesture}>
                            <Animated.View
                                style={[
                                    {
                                        position: "absolute",
                                        right: 0,
                                        top: 0,
                                        height: height,
                                        width: width * 0.7, // Chiếm 70% màn hình
                                        backgroundColor: "white",
                                        shadowColor: "#000",
                                        shadowOpacity: 0.2,
                                        shadowOffset: { width: -5, height: 0 },
                                        padding: 20,
                                        zIndex: 1
                                    },
                                    animatedStyle,
                                ]}
                            >
                                {/* <TouchableOpacity onPress={onClose}>
                                    <Text style={{ 
                                        fontSize: 20, 
                                        fontWeight: "bold", 
                                        color: "blue",
                                        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                                        borderRadius: 5,
                                        padding: 10,
                                        textAlign: "center",
                                        marginTop: 25,
                                        marginBottom: 10
                                    }}>Đóng</Text>
                                </TouchableOpacity> */}
                                <TouchableOpacity onPress={() => router.push("/ui/login")}>
                                    <Text style={{
                                        fontSize: 20, 
                                        fontWeight: "bold", 
                                        color: "blue",
                                        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                                        borderRadius: 5,
                                        padding: 10,
                                        marginTop: 20,
                                        textAlign: "center"
                                    }}>Login</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => router.push("/ui/homePage")}>
                                    <Text style={{ marginTop: 20, fontSize: 18 }}>Trang chủ</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => router.push("")}>
                                    <Text style={{ marginTop: 20, fontSize: 18 }}>Đặt Lịch Khám</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => router.push("")}>
                                    <Text style={{ marginTop: 20, fontSize: 18 }}>Dành cho bệnh nhân</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => router.push("")}>
                                    <Text style={{ marginTop: 20, fontSize: 18 }}>📂 Vai Trò của Healthcare Booking</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => router.push("")}>
                                    <Text style={{ marginTop: 20, fontSize: 18 }}>📂 Liên Hệ</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => router.push("")}>
                                    <Text style={{ marginTop: 20, fontSize: 18 }}>📂 Bệnh Nhân thường hỏi</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => router.push("")}>
                                    <Text style={{ marginTop: 20, fontSize: 18 }}>📂 Điều khoản sử dụng</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => router.push("")}>
                                    <Text style={{ marginTop: 20, fontSize: 18 }}>📂 Chính sách bảo mật</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => router.push("")}>
                                    <Text style={{ marginTop: 20, fontSize: 18 }}>📂 Thông Báo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => router.push("")}>
                                    <Text style={{ marginTop: 20, fontSize: 18 }}>⚙️ Cài đặt</Text>
                                </TouchableOpacity>
                            </Animated.View>
                        </PanGestureHandler>
                    </View>
                </TouchableWithoutFeedback>
            </GestureHandlerRootView>
                
        </Modal>
    )
}

export default SlideMenu