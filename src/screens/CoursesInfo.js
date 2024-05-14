import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Information from '../../components/Information'

export default function CoursesInfo() {
    return (
        <ScrollView>

            <Information title="React Native"
                imageSource={require('../../assets/ReactNAtive.png')}
                desc=" Kapsamlı React Native kursları"
            />
            <Information title="React JS"
                imageSource={require('../../assets/ReactJS.png')}
                desc=" Kapsamlı React JS kursları"
            />

            <Information title="Kotlin"
                imageSource={require('../../assets/Kotlin.png')}
                desc=" iş Tecrübesi"
            />
            <Information title="Fullstack Web Developer"
                imageSource={require('../../assets/FullStack.png')}
                desc=" iş tecrübesi"
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({})