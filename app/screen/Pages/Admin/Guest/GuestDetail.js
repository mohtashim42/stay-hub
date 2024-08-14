import { StyleSheet, Text, View, FlatList, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import DrawerContent from '../../../../components/DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
const bookingArr = Array.from({ length: 25 }, (_, index) => ({
    id: index,
    bookingNo: `STH-00001`,
    date: '2024-08-01',
    totalAmount: '$100',
    paidAmount: '$100',
    status: 'Paid'
}));
const Drawer = createDrawerNavigator();
const GuestDetailsContent = ({ navigation }) => {

    const [guestDetail, setGuestDetail] = useState({});
    const [bookingData, setBookingData] = useState(bookingArr);


    const renderItem = ({ item }) => (
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>{item.bookingNo}</Text>
          <Text style={styles.tableCell}>{item.date}</Text>
          <Text style={styles.tableCell}>{item.totalAmount}</Text>
          <Text style={styles.tableCell}>{item.paidAmount}</Text>
          <Text style={styles.tableCell}>{item.status}</Text>
          <View style={styles.tableActions}>
            <TouchableOpacity onPress={() => navigation.navigate('BookingDetails')} style={styles.detailButton}>
              <Text style={styles.detailButtonText}>Detail</Text>
            </TouchableOpacity>
          </View>
         
        </View>
      );

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
                <Ionicons name="menu" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.bookingtxt}>Guest Details</Text>

            <TouchableOpacity onPress={() => navigation.navigate('GuestList')} style={styles.backbtn}>
                <Text style={styles.backbtnText}>Back</Text>
            </TouchableOpacity>

            <Text style={styles.guestDetailsHeading}>Guest Details</Text>

            {/* Black Line */}
            <View style={styles.lineup} />

            {/* Guest Information */}
            <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                    <View style={styles.infoColumn}>
                        <Text style={styles.infoText}>Guest No:</Text>
                        <Text style={styles.infoText}>Email:</Text>
                        <Text style={styles.infoText}>Address:</Text>

                    </View>
                    <View style={styles.infoColumn}>
                        <Text style={styles.infoText}>Name:</Text>
                        <Text style={styles.infoText}>Phone:</Text>

                    </View>
                </View>
            </View>

            {/* Black Line */}
            <View style={styles.linedown} />

            {/* Table Heading */}
            <Text style={styles.tableHeading}>Booking Details</Text>
            <View style={styles.tableContainer}>
                <View style={styles.tableHeader}>
                    <Text style={styles.headerCell}>Booking No</Text>
                    <Text style={styles.headerCell}>Date</Text>
                    <Text style={styles.headerCell}>Total Amount</Text>
                    <Text style={styles.headerCell}>Paid Amount</Text>
                    <Text style={styles.headerCell}>Status</Text>
                    <Text style={styles.headerCell}>Action</Text>
                </View>
                <FlatList
                    data={bookingData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>

        </View>
    );
};

const GuestDetails = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    width: '60%',
                },
            }}
        >
            <Drawer.Screen name="GuestsDetailsContent" component={GuestDetailsContent} />
        </Drawer.Navigator>
    );
};

export default GuestDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    bookingtxt: {
        color: '#180161',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 20,
    },
    backbtn: {
        alignSelf: 'flex-start',
        marginTop: 50,
        padding: 10,
        backgroundColor: 'grey',
        borderRadius: 4,
    },
    backbtnText: {
        color: 'white',
        fontSize: 16,
    },
    guestDetailsHeading: {
        color: '#180161',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        marginTop: 5,
        alignSelf: 'flex-start',
    },
    linedown: {
        marginTop: 10,
        height: 1,
        backgroundColor: 'black',
        width: '100%',
        marginVertical: 10,
    },
    lineup: {
        height: 1,
        backgroundColor: 'black',
        width: '100%',
        marginVertical: 10,
    },
    infoContainer: {
        width: '100%',
        paddingHorizontal: 10,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    infoColumn: {
        flex: 1,
        marginHorizontal: 10,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 8,
    },
    tableHeading: {
        color: '#180161',
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 20,
        alignSelf: 'flex-start',
    },
    tableWrapper: {
        width: '100%',
        marginBottom: 20,
    },
    tableContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        overflow: 'hidden',
        marginBottom: 10,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
    },
    tableHeaderText: {
        fontWeight: 'bold',
        fontSize: 16,
        flex: 1,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
    },
    tableCell: {
        fontSize: 16,
        flex: 1,
        textAlign: 'center',
    },
    tableDetailCell: {
        flex: 2, // Makes the Details column wider
    },
    smallTableContainer: {
        width: 170,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#f9f9f9',
        alignSelf: 'flex-end', // Aligns the small table to the right side
    },
    smallTableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingVertical: 5,
    },
    smallTableHeader: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    smallTableAmount: {
        fontSize: 16,
    },
    menuButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
    },
});
